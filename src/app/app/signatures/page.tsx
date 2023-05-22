import React from "react";

import { prisma } from "../../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { TbSignatureOff } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-[calc(100vh-79px)] Container">
      {!!signatures && signatures?.length > 0 ? (
        user?.signatures.map((signature) => (
          <Image
            src={signature.url}
            key={signature.id}
            alt="Assinatura"
            width={200}
            height={300}
          />
        ))
      ) : (
        <div className="flex flex-col items-center gap-6 pt-20">
          <div className="w-full flex justify-center">
            <TbSignatureOff size={300} className="text-primary-400" />
          </div>

          <h2 className="font-bold text-2xl text-primary-500">
            Você não possui nenhuma assinatura
          </h2>

          <Link href="/app/addSignature">
            <button className="button rounded">Adicionar Assinaturas</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Signatures;
