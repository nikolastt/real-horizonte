// import { PDFDownloadLink } from "@react-pdf/renderer";
"use client";

import React, { useEffect, useState } from "react";
import PdfTest, { Pdf } from "./templates/PdfTest";
import { usePDF } from "@react-pdf/renderer";

function ButtonDowload() {
  const [instance, setInstance] = usePDF({ document: Pdf });

  if (instance.loading) return <div>Loading...</div>;

  if (instance.error) return <div>Error</div>;

  return (
    <div>
      <a href={instance.url!} download="test.pdf">
        Dowload
      </a>
    </div>
  );
}

export default ButtonDowload;
