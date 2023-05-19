"use client";

import React from "react";
import { FaSignature } from "react-icons/fa";

import { RiHome3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ButtonNav from "./ButtonNav";
import { usePathname } from "next/navigation";

function MenuNav() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div className="container fixed bottom-6">
      <div className="h-16 rounded-full bg-primary flex justify-around ">
        <ButtonNav
          active={pathName === "/app"}
          Icon={RiHome3Line}
          href="/app"
        />

        <ButtonNav
          active={pathName === "/app/dashboard"}
          Icon={RxDashboard}
          href="/app/dashboard"
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
