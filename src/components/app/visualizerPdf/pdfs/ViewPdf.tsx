"use client";

import ButtonDowload from "@/app/pdfs/ButtonDowload";
import { getPdfFromTemplateController } from "@/helpers/getPdfFromTemplate";
import { Template } from "@prisma/client";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  template: Template | undefined;
  signed?: boolean;
  name?: string | null | undefined;
  imageSignature?: string;
};

function ViewPdf({ template, signed, name, imageSignature }: Props) {
  const [client, setclient] = useState(false);

  console.log(name, "Name");

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
              <button className="button rounded w-full ">
                Adicionar assinatura ao documento
              </button>
            )}

            <ButtonDowload
              template={template}
              imageSignature={imageSignature}
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
