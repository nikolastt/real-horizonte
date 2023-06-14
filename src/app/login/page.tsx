"use client";

import React, { useEffect, useState } from "react";

import Logo from "/public/images/logo-seguro.png";
import Image from "next/image";
import GitHubLoginButton from "@/components/app/buttons/GitHubLoginButton";
import GoogleLoginButton from "@/components/app/buttons/GoogleLoginButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import ClipLoading from "@/components/ClipLoading";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
        toast.error("Erro ao realizar Login");
      }, 5000);
    }
  }, [loading]);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/app",
        redirect: false,
      });
    } catch (err: any) {
      setLoading(false);
      toast.error("Erro ao realizar login");
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

  return (
    <div className="max-w-lg mx-auto px-3 flex flex-col pt-36 gap-9">
      <Image src={Logo} alt={"Logo"} width={200} priority className="mx-auto" />
      <h1 className="text-2xl font-bold ">Sign in to your account</h1>

      <form action="" className="flex flex-col gap-6 " onSubmit={handleForm}>
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="gap-3 flex flex-col">
          <button type="submit" className="button-form w-full ">
            Sign in
          </button>

          <Link href={"/register"}>
            <button
              type="submit"
              className=" w-full button-secondary text-white rounded-lg"
            >
              Register
            </button>
          </Link>
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

export default Login;
