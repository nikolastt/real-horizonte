import React from "react";

import { prisma } from "../../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { TbSignatureOff } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import CardSignature from "@/components/signatures/CardSignature";

async function Signatures() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      signatures: true,
    },
  });

  const signatures = user?.signatures;

  return (
    <div className="min-h-[calc(100vh-79px)] Container pb-40">
      {!!signatures && signatures?.length > 0 ? (
        <>
          <h2 className="text-2xl text-primary font-bold pt-9 ">
            Minhas Assinaturas
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {user?.signatures.map((signature, i) => (
              <>
                <CardSignature
                  key={signature.id}
                  signature={signature}
                  index={i}
                />
              </>
            ))}
          </div>

          <Link href="/app/addSignature" className="w-full">
            <button className="button rounded w-full mt-6">
              Adicionar Assinatura
            </button>
          </Link>
        </>
      ) : (
        <div className="flex flex-col items-center gap-6 pt-20">
          <div className="w-full flex justify-center">
            <TbSignatureOff size={150} className="text-primary-400" />
          </div>

          <h2 className="font-bold text-2xl text-primary-500">
            Você não possui nenhuma assinatura
          </h2>

          <Link href="/app/addSignature">
            <button className="button rounded">Adicionar Assinatura</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Signatures;
