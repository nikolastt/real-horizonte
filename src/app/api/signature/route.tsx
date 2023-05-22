import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaDb";

export async function POST(req: Request, res: Response) {
  const { userId, url } = await req.json();

  try {
    await prisma.signature.create({
      data: {
        url,
        userId,
      },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }

  return NextResponse.json({});
}
