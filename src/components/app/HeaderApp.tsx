import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
};

function HeaderApp({ image, name }: Props) {
  return (
    <div className="Container flex items-center py-9">
      <Image
        src={image}
        alt="Avatar User"
        width={50}
        height={50}
        className="rounded-full overflow-hidden"
      />

      <span className="ml-2 ">Olá, {name}</span>
    </div>
  );
}

export default HeaderApp;
