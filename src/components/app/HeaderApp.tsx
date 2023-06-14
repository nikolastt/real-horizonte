import Image from "next/image";
import React from "react";
import Logo from "/public/images/logo-seguro.png";

type Props = {
  image: string;
  name: string;
};

function HeaderApp({ image, name }: Props) {
  return (
    <div className="Container flex items-center  h-[79px] ">
      <Image
        src={image}
        alt="Avatar User"
        width={50}
        height={50}
        className="rounded-full overflow-hidden"
      />

      {/* <Image src={Logo} alt="Logo" width={150} height={150} /> */}

      <span className="ml-2 ">Olá, {name}</span>
    </div>
  );
}

export default HeaderApp;
