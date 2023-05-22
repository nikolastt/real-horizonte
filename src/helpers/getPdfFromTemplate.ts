import { Pdf } from "@/app/pdfs/templates/PDFSeguroAutomovel";
import { Template } from "@prisma/client";

export const getPdfFromTemplateController = (
  template: Template | undefined
) => {
  if (template?.name === "SeguroAutomovel") {
    return Pdf;
  }
};
