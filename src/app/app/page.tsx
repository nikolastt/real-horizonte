import React from "react";
import PdfTest, { Pdf } from "../pdfs/templates/PDFSeguroAutomovel";
import ButtonDowload from "../pdfs/ButtonDowload";
import dynamic from "next/dynamic";

import { prisma } from "../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DocumentsNotSigned from "@/components/documents/DocumentsNotSigned";
import Link from "next/link";
import { TbNotesOff } from "react-icons/tb";

const Button = dynamic(() => import("../pdfs/ButtonDowload"), { ssr: false });

async function App() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      contracts: {
        where: {
          signature: {
            is: null,
          },
        },
        include: {
          template: true,
        },
      },
    },
  });

  return (
    <>
      <div className="min-h-[calc(100vh-79px)] Container pb-40">
        {/* <div className=" h-2/3">
        <PdfTest />
      </div>
      <Button />

      {Pdf} */}

        {user?.contracts.length && user?.contracts?.length > 0 ? (
          <div className="flex flex-col gap-6 pt-9 pb-36">
            <h2 className="text-primary font-bold text-xl">
              Documentos esperando assinatura
            </h2>
            <div className="grid lg:grid-cols-2 gap-3">
              {user?.contracts.map((contractNotSigned) => (
                <DocumentsNotSigned
                  key={contractNotSigned.id}
                  contract={contractNotSigned}
                  name={user.name}
                  userId={user.id}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 pt-20">
            <div className="w-full flex justify-center">
              <TbNotesOff size={150} className="text-primary-400" />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="font-bold text-2xl text-primary-500 text-center">
                Você não possui nenhum contrato para assinar
              </h2>
              <span className="font-bold text-sm text-primary-500 text-center">
                Vá para meus contratos para visulaizar todos
              </span>
            </div>

            <Link href="/app/docs">
              <button className="button rounded">Meus Contratos</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
