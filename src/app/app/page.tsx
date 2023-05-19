import React from "react";
import PdfTest from "../pdfs/templates/PdfTest";
import ButtonDowload from "../pdfs/ButtonDowload";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../pdfs/ButtonDowload"), { ssr: false });

async function App() {
  return (
    <>
      <span>PDF</span>
      <Button />
      <PdfTest />;
    </>
  );
}

export default App;
