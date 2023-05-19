import React from "react";

import Logo from "/public/images/logo-seguro.png";
import Image from "next/image";
import GitHubLoginButton from "@/components/app/buttons/GitHubLoginButton";
import GoogleLoginButton from "@/components/app/buttons/GoogleLoginButton";

function Login() {
  return (
    <div className="max-w-lg mx-auto px-3 flex flex-col pt-36 gap-9">
      <Image src={Logo} alt={"Logo"} width={200} priority className="mx-auto" />
      <h1 className="text-2xl font-bold ">Sign in to your account</h1>

      <form action="" className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="email"
            name=""
            id=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            className="border-2 border-primary-200 rounded-lg h-10 focus:outline-none focus:border-primary px-3"
            type="password"
            name=""
            id=""
          />
        </div>
        <button className="button-form w-full ">Sign in</button>
      </form>

      <div className="flex items-center">
        <hr className="bg-primary-200 flex-1 h-px border-0 rounded-full" />
        <span className="px-6 font-semibold text-base">Or continue with</span>
        <hr className="bg-primary-200 flex-1 border-0 h-px rounded-full" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <GoogleLoginButton />
        <GitHubLoginButton />
      </div>
    </div>
  );
}

export default Login;
