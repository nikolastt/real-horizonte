import { prisma } from "@/lib/prismaDb";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    where: {
      admin: true,
    },
  });

  return NextResponse.json(users);
}

type Body = {
  user: User;
};

export async function POST(req: Request, res: Response) {
  const { user }: Body = await req.json();

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        admin: true,
      },
    });
    return NextResponse.json({});
  } catch (err) {
    return NextResponse.error();
  }

  return NextResponse.json({});
}
