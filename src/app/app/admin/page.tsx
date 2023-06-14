import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ModalAddAdmin from "@/components/admin/modals/modalAddAdmin/ModaAddAdmin";
import ModalAddContract from "@/components/admin/modals/modalAddContract/ModalAddContract";
import ModalAddTemplate from "@/components/admin/modals/modalAddTemplate/modalAddTemplate";
import ModalRemoveAdmin from "@/components/admin/modals/modalRemoveAdmin/ModalRemoveAdmin";
import { getServerSession } from "next-auth";
import React from "react";

import { prisma } from "@/lib/prismaDb";
import { redirect } from "next/navigation";

async function Admin() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  if (!user?.admin) {
    redirect("/app");
  }

  return (
    <div className="grid grid-cols-2 gap-3 Container">
      <ModalAddContract />
      <ModalAddTemplate />
      <ModalAddAdmin />
      <ModalRemoveAdmin />
    </div>
  );
}

export default Admin;
