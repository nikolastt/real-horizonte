"use client";

import React, { useState } from "react";

import Logo from "/public/images/logo-seguro.png";
import Image from "next/image";
import GitHubLoginButton from "@/components/app/buttons/GitHubLoginButton";
import GoogleLoginButton from "@/components/app/buttons/GoogleLoginButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { LoaderIcon, toast } from "react-hot-toast";
import ClipLoading from "@/components/ClipLoading";

function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [name, setName] = useState<string>();

  const [loading, setLoading] = useState(false);

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/register", { email, password, name });
      setRegisterSuccess(true);
      setLoading(false);
      toast.success("Cadastro realizado com sucesso!");
    } catch (err: any) {
      setLoading(false);
      toast.error("Erro ao cadastrar");
      throw new Error(err);
    }
  };

  if (!!loading) {
    return (
      <div className="w-full  h-screen flex justify-center items-center">
        <ClipLoading />
      </div>
    );
  }

  if (!!registerSuccess) {
    return (
      <>
        <div className="w-full h-screen flex flex-col justify-center items-center px-6 ">
          Registro feito com sucesso Faça Login para continuar
          <Link href={"/login"} className="w-full mt-6">
            <div className="gap-3 flex flex-col">
              <button type="submit" className="button-form w-full ">
                Login
              </button>
            </div>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-3 flex flex-col pt-36 gap-9">
      <Image src={Logo} alt={"Logo"} width={200} priority className="mx-auto" />
      <h1 className="text-2xl font-bold ">Registrar Sua conta</h1>

      <form action="" className="flex flex-col gap-6 " onSubmit={handleForm}>
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Nome</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="password"
            name=""
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="gap-3 flex flex-col">
          <button type="submit" className="button-form w-full ">
            Registrar
          </button>
        </div>
      </form>

      <div className="flex items-center">
        <hr className="bg-primary-200 flex-1 h-px border-0 rounded-full" />
        <span className="px-6 font-semibold text-base">Or continue with</span>
        <hr className="bg-primary-200 flex-1 border-0 h-px rounded-full" />
      </div>

      <div className="grid  gap-3">
        <GoogleLoginButton />
        {/* <GitHubLoginButton /> */}
      </div>
    </div>
  );
}

export default Register;
