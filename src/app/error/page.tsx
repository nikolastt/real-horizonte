"use client";
import React from "react";
import LayoutApp from "../app/layout";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function Error() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-9">
          <p className="text-2xl font-bold">
            Erro ao se cadastrar <span className="text-red-700">{error}</span>
          </p>
          <Link href="/login" className="button rounded-lg flex justify-center">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
