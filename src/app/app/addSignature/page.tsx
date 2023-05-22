import Signature from "@/components/addSignature/Signature";
import React from "react";

import { prisma } from "../../../lib/prismaDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function AddSignature() {
  const session = await getServerSession(authOptions);
  const userId = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    select: {
      id: true,
    },
  });

  return (
    <div className="min-h-[calc(100vh-79px)] Container">
      <Signature userId={userId?.id!} />
    </div>
  );
}

export default AddSignature;
