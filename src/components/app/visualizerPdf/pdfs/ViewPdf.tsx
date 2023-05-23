"use client";

import { getPdfFromTemplateController } from "@/helpers/getPdfFromTemplate";
import { Template } from "@prisma/client";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  template: Template | undefined;
  signed?: boolean;
  name?: string;
  imageSignature?: string;
};

function ViewPdf({ template, signed, name, imageSignature }: Props) {
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

          {!signed && (
            <div className=" flex justify-center mt-6">
              <button className="button rounded">
                Adicionar assinatura ao documento
              </button>
            </div>
          )}
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
