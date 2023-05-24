// import { PDFDownloadLink } from "@react-pdf/renderer";
"use client";

import React, { useEffect, useState } from "react";
import PdfTest, { Pdf } from "./templates/PDFSeguroAutomovel";
import { usePDF } from "@react-pdf/renderer";
import { Signature, Template } from "@prisma/client";
import { getPdfFromTemplateController } from "@/helpers/getPdfFromTemplate";

type Props = {
  template: Template;
  name?: String | null;
};

function ButtonDowload({ template, name }: Props) {
  const templatePdf = getPdfFromTemplateController(template);

  const [instance, setInstance] = usePDF({
    document: templatePdf?.(name)!,
  });

  if (instance.loading) return <div>Loading...</div>;

  if (instance.error) return <div>Error</div>;

  return (
    <a href={instance.url!} download="contract.pdf">
      <button className="button rounded">Visualizar contrato</button>
    </a>
  );
}

export default ButtonDowload;
