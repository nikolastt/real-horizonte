// import { PDFDownloadLink } from "@react-pdf/renderer";
"use client";

import React, { useEffect, useState } from "react";
import PdfTest, { Pdf } from "./templates/PDFSeguroAutomovel";
import { usePDF } from "@react-pdf/renderer";
import { Signature, Template } from "@prisma/client";
import { getPdfFromTemplateController } from "@/helpers/getPdfFromTemplate";

type Props = {
  template: Template | undefined;
  name?: String | null;
  text?: String;
  imageSignature?: String;
  buttonStyle?: String;
};

function ButtonDowload({
  template,
  name,
  imageSignature,
  text = "Visualizar Contrato",
  buttonStyle,
}: Props) {
  const templatePdf = getPdfFromTemplateController(template);

  const [instance, setInstance] = usePDF({
    document: templatePdf?.(name, imageSignature)!,
  });

  if (instance.loading) return <div>Loading...</div>;

  if (instance.error) return <div>Error</div>;

  return (
    <button className={`button rounded ${buttonStyle} `}>
      <a href={instance.url!} download="contract.pdf">
        {text}
      </a>
    </button>
  );
}

export default ButtonDowload;
