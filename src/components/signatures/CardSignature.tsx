import Image from "next/image";
import React from "react";
import TrashIcon from "./components/TrashIcon";
import { Signature } from "@prisma/client";

type Props = {
  signature: Signature;
  index: number;
};

function CardSignature({ signature, index }: Props) {
  return (
    <div className="bg-primary-100 rounded-lg relative h-28 ">
      <TrashIcon index={index} id={signature.id} />

      <Image
        src={signature.url}
        alt="Assinatura"
        className="object-contain p-3 group-hover:bg-primary/50"
        fill
      />
    </div>
  );
}

export default CardSignature;
