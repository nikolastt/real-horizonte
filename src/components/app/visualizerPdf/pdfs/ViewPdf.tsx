"use client";

import ButtonDowload from "@/app/pdfs/ButtonDowload";
import ModalLinkSignatures from "@/components/documents/modals/ModalLinkSignature";
import { getPdfFromTemplateController } from "@/helpers/getPdfFromTemplate";
import { Contract, Signature, Template, User } from "@prisma/client";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  template: Template | undefined;
  signed?: boolean;
  name?: string | null | undefined;
  imageSignature?: string;
  userId?: string;
  contract?:
    | (Contract & {
        template: Template;
        signature: Signature | null;
        User: User | null;
      })
    | null;
};

function ViewPdf({
  template,
  signed,
  name,
  imageSignature,
  userId,
  contract,
}: Props) {
  const [client, setclient] = useState(false);

  const templatePdf = getPdfFromTemplateController(template);

  useEffect(() => {
    setclient(true);
  }, []);

  return (
    <>
      {client ? (
        <>
          <PDFViewer
            className="w-full h-2/3 rounded-xl overflow-hidden "
            showToolbar={true}
          >
            {templatePdf?.(name, imageSignature)}
          </PDFViewer>

          <div className="grid lg:grid-cols-2 gap-3 mt-6">
            {!signed && (
              <ModalLinkSignatures
                userId={userId}
                contract={contract as Contract}
              />
            )}

            <ButtonDowload
              template={template}
              imageSignature={imageSignature}
              name={name}
              buttonStyle={`w-full ${signed && "col-span-2"}`}
              text="Baixar Contrato"
            />
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <ClipLoader size={50} className="text-primary" />
        </div>
      )}
    </>
  );
}

export default ViewPdf;
