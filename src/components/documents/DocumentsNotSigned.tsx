import { Contract, Signature, Template } from "@prisma/client";
import React from "react";
import dateFormat from "dateformat";

import { MdEditDocument } from "react-icons/md";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonDowload from "@/app/pdfs/ButtonDowload";
import ModalLinkSignatures from "./modals/ModalLinkSignature";

type Props = {
  contract: Contract & { template: Template };
  name?: string | null;
  userId?: string;
};

function DocumentsNotSigned({ contract, name, userId }: Props) {
  const dateContract = dateFormat("mm/dd/yyyy");
  const arrayTags = contract.tags.split(", ");

  return (
    <div className="bg-primary-100 rounded-xl p-6 flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span>{contract.title}</span>
        <span>{dateContract}</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-12 h-12 bg-primary flex justify-center items-center rounded-full">
          <MdEditDocument className="text-white" size={30} />
        </div>
        <span className="text-secondary font-light">Esperando assinatura</span>
      </div>

      <div className="flex gap-3 mt-3">
        {arrayTags.map((tag, i) => (
          <span key={i} className="px-3 py-1 border border-primary rounded-xl">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <BrowserView>
          <Link href={`/app/visualizerPdf/${contract.id}`}>
            <button className="button rounded">Visualizar contrato</button>
          </Link>
        </BrowserView>
        <MobileView>
          <ButtonDowload template={contract.template} name={name} />
        </MobileView>
        <ModalLinkSignatures userId={userId} />
      </div>
    </div>
  );
}

export default DocumentsNotSigned;
