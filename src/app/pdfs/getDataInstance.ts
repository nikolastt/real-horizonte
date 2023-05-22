import { Template } from "@prisma/client";
import { Pdf } from "./templates/PDFSeguroAutomovel";

export const getDataInstance = (template: Template) => {
  if (template.name === "SeguroAutomovel") {
    return Pdf;
  } else {
    return Pdf;
  }
};
