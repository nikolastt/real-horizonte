import { prisma } from "@/lib/prismaDb";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    where: {
      admin: false,
    },
  });

  return NextResponse.json(users);
}
