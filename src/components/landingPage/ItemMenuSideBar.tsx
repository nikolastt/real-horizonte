"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type ItemMenuSideBar = {
  content?: string;
  path?: string;
  children?: React.ReactNode;
  href: string;
  closeMenu: () => void;
};

const ItemMenuSideBar = ({
  content,
  path,
  children,
  href,
  closeMenu,
}: ItemMenuSideBar) => {
  const pathName = usePathname();
  const [active, setactive] = useState(false);

  useEffect(() => {
    if (path) {
      if (path !== "/" && pathName?.includes(path)) {
        setactive(true);
        return;
      }

      if (pathName === "/" && href === "/") {
        setactive(true);
        return;
      }

      setactive(false);
    }
  }, [pathName, path, href]);

  return (
    <Link href={href as string}>
      <div className="px-3 no-underline mb-3">
        <div
          className={`flex items-center    ${
            active && "!bg-primary text-white shadow"
          }  py-2 rounded-lg hover:bg-secondary hover:text-white hover:scale-105 duration-300 cursor-pointer no-underline text-black`}
          onClick={closeMenu}
        >
          {children}
          <span className="!no-underline no-underline">{content}</span>
        </div>
      </div>
    </Link>
  );
};

export default ItemMenuSideBar;
