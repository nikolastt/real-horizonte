import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
  text: string;
};

function Elipses({ image, text }: Props) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Image src={image} alt={text} />

      <span className="font-bold text-center text-xs"> {text}</span>
    </div>
  );
}

export default Elipses;
