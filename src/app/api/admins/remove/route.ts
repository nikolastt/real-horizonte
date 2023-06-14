import { prisma } from "@/lib/prismaDb";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

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
        admin: false,
      },
    });
    return NextResponse.json({});
  } catch (err) {
    return NextResponse.error();
  }

  return NextResponse.json({});
}
