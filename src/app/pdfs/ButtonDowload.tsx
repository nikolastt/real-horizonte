// import { PDFDownloadLink } from "@react-pdf/renderer";
"use client";

import React, { useEffect, useState } from "react";
import PdfTest, { Pdf } from "./templates/PDFSeguroAutomovel";
import { usePDF } from "@react-pdf/renderer";

function ButtonDowload() {
  const [instance, setInstance] = usePDF({ document: Pdf("nikolas") });

  if (instance.loading) return <div>Loading...</div>;

  if (instance.error) return <div>Error</div>;

  return (
    <div>
      <a href={instance.url!} download="test.pdf">
        {instance.url}
        <hr />
        Dowload
      </a>
    </div>
  );
}

export default ButtonDowload;
