import React from "react";
import { prisma } from "../../../../lib/prismaDb";
import ViewPdf from "@/components/app/visualizerPdf/pdfs/ViewPdf";
type Props = {
  params: { id: string };
};

async function VisualizerPdf({ params: { id } }: Props) {
  const contract = await prisma.contract.findFirst({
    where: {
      id: id,
    },
    include: {
      User: true,
      template: true,
      signature: true,
    },
  });

  const signed = contract?.signature?.id ? true : false;

  return (
    <div className="h-[calc(100vh-79px)] Container">
      <ViewPdf template={contract?.template} signed={signed} />
    </div>
  );
}

export default VisualizerPdf;
