import { Signature } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  signature: Signature;
  setSignature: (signature: Signature) => void;
};

function CardSignature({ signature, setSignature }: Props) {
  return (
    <div
      onClick={() => setSignature(signature)}
      className="w-full h-24 cursor-poiter relative border border-primary rounded-lg hover:border-secondary transition-all ease-linear hover:bg-primary/20 hover:scale-105 "
    >
      <Image
        src={signature.url}
        fill
        alt="Signature"
        className="p-3 cursor-pointer"
      />
    </div>
  );
}

export default CardSignature;
