import { Contract } from "@prisma/client";
import React from "react";
import dateFormat from "dateformat";

type Props = {
  contract: Contract;
};

function DocumentsNotSigned({ contract }: Props) {
  const dateContract = dateFormat("mm/dd/yyyy");

  return (
    <div className="bg-primary-100 rounded-xl p-6 flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span>{contract.title}</span>
        <span>{dateContract}</span>
      </div>

      <div className="flex justify-between">
        <span>Name</span>
        <span>Esperando assinatura</span>
      </div>

      <div>{contract.tags}</div>
    </div>
  );
}

export default DocumentsNotSigned;
