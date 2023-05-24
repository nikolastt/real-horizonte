"use client";

import React from "react";
import { FaSignature } from "react-icons/fa";

import { RiHome3Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ButtonNav from "./ButtonNav";
import { usePathname } from "next/navigation";

function MenuNav() {
  const pathName = usePathname();

  return (
    <div className="Container w-full fixed bottom-6 left-0 right-0  ">
      <div className="h-16 rounded-full bg-primary flex justify-around max-w-lg mx-auto">
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
        <ButtonNav
          active={pathName === "/app/admin"}
          Icon={MdOutlineAdminPanelSettings}
          href="/app/admin"
        />
      </div>
    </div>
  );
}

export default MenuNav;
