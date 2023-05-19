import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/route";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  return <div className="text-center ">Signature</div>;
}

export default Dashboard;
