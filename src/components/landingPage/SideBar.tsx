import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";

import { SiOpslevel } from "react-icons/si";
import {
  MdAdminPanelSettings,
  MdAutoStories,
  MdDashboard,
} from "react-icons/md";
import { BsQuestion } from "react-icons/bs";
import { IoMdApps } from "react-icons/io";
import ItemMenuSideBar from "./ItemMenuSideBar";
import { signOut } from "next-auth/react";
// import { signOut } from "next-auth/react";

interface ISideBar {
  isOpen?: boolean;
  name?: string | undefined | null;
  image?: string | undefined | null;
  isAdmin?: boolean;
  closeMenu: () => void;
}

const SideBar: React.FC<ISideBar> = ({ isOpen, name, image, closeMenu }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        className={`min-h-screen fixed  right-0 bottom-0 bg-white top-0 w-[250px] ${
          menuIsOpen ? "mr-0 " : "-mr-[250px]"
        }  bg-bg ease-in-out duration-300 pt-[30px]  lg:hidden z-40 overflow-auto bar
        
        scrollbar scrollbar-thumb-secondary-300 scrollbar-thumb-rounscrollded-lg scrollbar-track-transparent overflow-x-hidden custom_scrollbar `}
      >
        <div className="flex justify-center mt-3">
          <div className="w-[75px] h-[75px] relative rounded-full overflow-hidden">
            {image && <Image src={image} alt="User Avatar" fill priority />}
          </div>
        </div>

        <span className=" text-2xl flex justify-center mt-6 text-center px-1">
          Olá, {name}
        </span>

        <div className="space-y-2 mt-12  ">
          <ItemMenuSideBar
            content="Home"
            path="/"
            href="/"
            closeMenu={closeMenu}
          >
            <AiFillHome size={25} className="mx-3" />
          </ItemMenuSideBar>

          <ItemMenuSideBar
            closeMenu={closeMenu}
            content="Quem Somos"
            href="/about"
            path="/about"
          >
            <BsQuestion size={25} className="mx-3" />
          </ItemMenuSideBar>

          <ItemMenuSideBar
            closeMenu={closeMenu}
            content="Produtos"
            href="/products"
            path="/products"
          >
            <MdAutoStories size={25} className="mx-3" />
          </ItemMenuSideBar>

          <ItemMenuSideBar
            closeMenu={closeMenu}
            content="App"
            href="/app"
            path="/app"
          >
            <IoMdApps size={25} className="mx-3" />
          </ItemMenuSideBar>

          {!!name && (
            <div onClick={() => signOut()}>
              <ItemMenuSideBar content="Sair" href="/" closeMenu={closeMenu}>
                <AiOutlineArrowRight size={25} className="mx-3" />
              </ItemMenuSideBar>
            </div>
          )}
        </div>
      </div>

      {/* Deixar a página embaçada com o menu aberto. */}
      <div
        className={` ${
          !menuIsOpen && "hidden"
        } fixed left-0 bottom-0 min-w-[calc(100%)] bg-black/90 h-full ease-out duration-300 z-30`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default SideBar;
