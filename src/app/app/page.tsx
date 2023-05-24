import React from "react";
import PdfTest, { Pdf } from "../pdfs/templates/PDFSeguroAutomovel";
import ButtonDowload from "../pdfs/ButtonDowload";
import dynamic from "next/dynamic";

import { prisma } from "../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DocumentsNotSigned from "@/components/documents/DocumentsNotSigned";

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
      <div className="min-h-[calc(100vh-79px)] Container">
        {/* <div className=" h-2/3">
        <PdfTest />
      </div>
      <Button />

      {Pdf} */}
        <div className="flex flex-col gap-6 pt-9 pb-36">
          <h2 className="text-primary font-bold text-xl">
            Documentos esperando assinatura
          </h2>
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
    </>
  );
}

export default App;
