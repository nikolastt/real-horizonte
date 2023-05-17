import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  onClick?: () => void;
  click?: boolean;
};

function UserCardRow({ image, name, onClick, click = true }: Props) {
  return (
    <div
      className={`flex border border-primary rounded-xl px-6 py-3 items-center ${
        click && "cursor-pointer"
      } hover:border-secondary transition-all ease-linear hover:text-secondary`}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="Avatar User"
        width={45}
        height={45}
        className="rounded-full overflow-hidden"
      />

      <span className="ml-3 text-lg font-semibold">{name}</span>
    </div>
  );
}

export default UserCardRow;
