import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaDb";

export async function POST(req: Request, res: Response) {
  const { email } = await req.json();

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
