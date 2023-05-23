import Signature from "@/components/addSignature/Signature";
import React from "react";

import { prisma } from "../../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function AddSignature() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    select: {
      id: true,
      email: true,
    },
  });

  return (
    <div className="min-h-[calc(100vh-79px)] Container">
      <Signature userId={user?.id!} email={user?.email!} />
    </div>
  );
}

export default AddSignature;
