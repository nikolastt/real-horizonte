import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { prisma } from "../../../lib/prismaDb";
import { Contract, Signature, Template } from "@prisma/client";
import DocumentsNotSigned from "@/components/documents/DocumentsNotSigned";
import { TbNotesOff } from "react-icons/tb";
import Link from "next/link";
import DocumentsSigned from "@/components/documents/DocumentsSigned";
import { BsPen } from "react-icons/bs";

async function Docs() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      contracts: {
        include: {
          template: true,
          signature: true,
        },
      },
    },
  });

  const typeContracts = () => {
    const signinContract: (Contract & {
      signature: Signature | null;
      template: Template;
    })[] = [];
    const notSigninContract: (Contract & {
      template: Template;
    })[] = [];

    user?.contracts.map((contract) => {
      if (contract.signature) {
        signinContract.push(contract);
      } else {
        notSigninContract.push(contract);
      }
    });

    return { signinContract, notSigninContract };
  };

  const { notSigninContract, signinContract } = typeContracts();

  return (
    <div className="min-h-[calc(100vh-79px)] Container pb-40">
      {signinContract.length > 0 ? (
        <div className="flex flex-col gap-6 pt-9 ">
          <h2 className="text-primary font-bold text-xl">
            Documentos assinados
          </h2>
          <div className="grid lg:grid-cols-2 gap-3">
            {signinContract.map((contract) => (
              <DocumentsSigned
                key={contract.id}
                contract={contract}
                name={user?.name}
                userId={user?.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 pt-9">
          <div className="w-full flex justify-center">
            <BsPen size={75} className="text-primary-400" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl text-primary-500 text-center ">
              Você não assinou nenhum contrato
            </h2>
          </div>
        </div>
      )}

      {notSigninContract.length > 0 ? (
        <div className="flex flex-col gap-6 pt-16 pb-36">
          <h2 className="text-primary font-bold text-xl">
            Documentos esperando assinatura
          </h2>
          <div className="grid lg:grid-cols-2 gap-3">
            {notSigninContract.map((contract) => (
              <DocumentsNotSigned
                key={contract.id}
                contract={contract}
                name={user?.name}
                userId={user?.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 pt-20">
          <div className="w-full flex justify-center">
            <TbNotesOff size={75} className="text-primary-400" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl text-primary-500 text-center ">
              Você não possui nenhum contrato para assinar
            </h2>
            <span className="font-bold text-sm text-primary-500 text-center">
              Aguarde a empresa emitir o contrato
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Docs;
