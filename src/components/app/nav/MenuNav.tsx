"use client";

import React, { useEffect, useState } from "react";
import { FaSignature } from "react-icons/fa";

import { RiHome3Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ButtonNav from "./ButtonNav";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";

type Props = {
  email: string;
};

function MenuNav({ email }: Props) {
  const pathName = usePathname();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const userDb = await (await axios.post("/api/users", { email })).data;
      setUser(userDb);
    };
    getUser();
  }, []);

  return (
    <div className="Container w-full fixed bottom-6 left-0 right-0 z-50 ">
      <div className="h-16 rounded-full bg-primary flex justify-around items-center max-w-lg mx-auto">
        {user?.image && (
          <Image
            src={user?.image!}
            width={24}
            height={24}
            alt="Avatar"
            className="rounded-full p-[3px] w-12 h-12 border border-secondary cursor-pointer "
          />
        )}

        <ButtonNav
          active={pathName === "/app"}
          Icon={RiHome3Line}
          href="/app"
        />

        <ButtonNav
          active={pathName === "/app/docs"}
          Icon={HiOutlineDocumentDuplicate}
          href="/app/docs"
        />
        <ButtonNav
          active={pathName === "/app/signatures"}
          Icon={FaSignature}
          href="/app/signatures"
        />

        {user?.admin && (
          <ButtonNav
            active={pathName === "/app/admin"}
            Icon={MdOutlineAdminPanelSettings}
            href="/app/admin"
          />
        )}
      </div>
    </div>
  );
}

export default MenuNav;
