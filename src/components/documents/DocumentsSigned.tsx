import { Contract, Signature, Template } from "@prisma/client";
import React from "react";
import dateFormat from "dateformat";

import { MdEditDocument } from "react-icons/md";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonDowload from "@/app/pdfs/ButtonDowload";

type Props = {
  contract: Contract & { template: Template };
  name?: string | null;
  userId?: string;
};

function DocumentsSigned({ contract, name, userId }: Props) {
  const dateContract = dateFormat(contract.createdAt, "dd/mm/yyyy");
  const signinIn = dateFormat(contract.signedIn!, "dd/mm/yyyy");
  const arrayTags = contract.tags.split(", ");

  return (
    <div className="bg-primary-100 rounded-xl p-6 flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span>{contract.title}</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-12 h-12 bg-primary flex justify-center items-center rounded-full">
          <MdEditDocument className="text-white" size={30} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-emerald-500 font-light m-o p-0">
            Assinado em
          </span>
          <span className=" m-o p-0 font-light text-sm">{signinIn}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-3 mb-6">
        {arrayTags.length > 0 &&
          arrayTags.map(
            (tag, i) =>
              tag !== "" && (
                <span
                  key={i}
                  className="px-3 py-1 border border-primary rounded-xl"
                >
                  {tag}
                </span>
              )
          )}
      </div>

      <div className=" mt-auto">
        <BrowserView>
          <Link href={`/app/visualizerPdf/${contract.id}`}>
            <button className="button rounded w-full">
              Visualizar contrato
            </button>
          </Link>
        </BrowserView>
        <MobileView>
          <ButtonDowload template={contract.template} name={name} />
        </MobileView>
      </div>
    </div>
  );
}

export default DocumentsSigned;
