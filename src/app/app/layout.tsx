import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MenuNav from "@/components/app/nav/MenuNav";
import HeaderApp from "@/components/app/HeaderApp";

type Props = {
  children: React.ReactNode;
};

async function LayoutApp({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="bg-primary-300 h-screen text-primary">
      <MenuNav />

      <HeaderApp name={session.user?.name!} image={session.user?.image!} />
      {children}
    </div>
  );
}

export default LayoutApp;
