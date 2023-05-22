import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType & any;
  active: boolean;
  href: string;
};

function ButtonNav({ Icon, active, href }: Props) {
  return (
    <Link href={href} className="flex items-center justify-center">
      <div
        className={`${
          active && "-translate-y-4 bg-primary p-6 rounded-full"
        } transition-all ease-in-out `}
      >
        <Icon
          className={` ${
            active ? "text-secondary h-9 w-9 " : "text-primary-100"
          }  ${
            !active && "hover:scale-110"
          } w-6 h-6 transition-all ease-in-out`}
        />
      </div>
    </Link>
  );
}

export default ButtonNav;
