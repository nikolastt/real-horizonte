import React from "react";
import PdfTest, { Pdf } from "../pdfs/templates/PDFSeguroAutomovel";
import ButtonDowload from "../pdfs/ButtonDowload";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../pdfs/ButtonDowload"), { ssr: false });

async function App() {
  return (
    <div className="min-h-[calc(100vh-79px)]">
      <div className=" h-2/3">
        <PdfTest />
      </div>
      <Button />

      {/* {Pdf} */}
    </div>
  );
}

export default App;
