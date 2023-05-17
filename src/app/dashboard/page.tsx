import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../../lib/prismaDb";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  // const signature = await prisma.

  return <div className="h-full text-center mt-5">Signature</div>;
}

export default Dashboard;
