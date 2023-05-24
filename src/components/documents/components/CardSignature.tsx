import { Signature } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  signature?: Signature;
  setSignature?: (signature: Signature) => void;

  clickable?: boolean;
};

function CardSignature({ signature, setSignature, clickable = false }: Props) {
  const handleClick = () => {
    if (clickable && !!signature) {
      setSignature?.(signature);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full h-36 lg:h-52 ${
        clickable &&
        "cursor-pointer !h-24 lg:!h-36 hover:bg-primary/20 hover:scale-105"
      } relative border border-primary rounded-lg hover:border-secondary transition-all ease-linear `}
    >
      <Image
        src={signature?.url || ""}
        fill
        alt="Signature"
        className={`p-3 ${clickable && "cursor-pointer"}`}
      />
    </div>
  );
}

export default CardSignature;
