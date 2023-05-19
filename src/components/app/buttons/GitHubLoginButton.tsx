"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  style?: string;
};

function GitHubLoginButton({ style }: Props) {
  return (
    <button
      className={`button-gitHub bg-[#24292f] hover:bg-[#24292f]/80 transition-colors text-primary-100 font-bold flex items-center justify-center rounded-lg py-2 ${style}`}
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}/app`,
        })
      }
    >
      <AiFillGithub size={25} className="mr-3" color="#eaedff" /> GitHub
    </button>
  );
}

export default GitHubLoginButton;
