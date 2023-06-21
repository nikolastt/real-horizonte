"use client";

import Image from "next/image";
import React, { useState } from "react";

import Logo from "/public/images/logoGreen.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideBar from "./SideBar";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();
  return (
    <>
      <div className="flex h-[79px] justify-between items-center Container ">
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          className="p-3 md:scale-125"
        />

        <div className="hidden h-full flex-shrink-0  items-center space-x-6  md:flex ">
          <ul className="flex items-center  p-0 m-0 gap-6  ">
            <Link href="/">
              <li
                className={`itemNav   items-center justify-center   hover:scale-105 duration-200 `}
              >
                Home
              </li>
            </Link>

            <a href="#ourPrograms">
              <li
                className={`itemNav   items-center justify-center  hover:scale-105 duration-200`}
              >
                Contato
              </li>
            </a>

            <a href="/app">
              <li
                className={`itemNav   items-center justify-center  hover:scale-105 duration-200`}
              >
                Área do cliente
              </li>
            </a>
          </ul>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <div className="z-50">
              <AiOutlineClose
                strokeWidth={56}
                size={25}
                className="z-50 cursor-pointer md:hidden border-none"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          ) : (
            <div>
              <AiOutlineMenu
                size={25}
                strokeWidth={56}
                className={`z-50 cursor-pointer  md:hidden border-none`}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          )}
        </div>

        <SideBar
          isOpen={isOpen}
          closeMenu={() => setIsOpen(false)}
          name={session?.user?.name}
          image={session?.user?.image}
        />
      </div>
    </>
  );
}

export default Header;
