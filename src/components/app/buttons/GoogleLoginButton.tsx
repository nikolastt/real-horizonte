"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {
  style?: string;
};

function GoogleLoginButton({ style }: Props) {
  return (
    <button
      className={`button-gitHub bg-[#4281e5] hover:bg-[#4281e5]/80 transition-colors text-primary-100 font-bold flex items-center justify-center rounded-lg py-2 ${style}`}
      onClick={() => signIn("google")}
    >
      <span className="bg-white  rounded-full p-1 mr-3">
        <FcGoogle size={25} color="#eaedff" />
      </span>
      Google
    </button>
  );
}

export default GoogleLoginButton;
