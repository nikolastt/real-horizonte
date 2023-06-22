import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaDb";
import { request } from "http";

export async function POST(req: Request, res: Response) {
  const { userId, url } = await req.json();

  console.log(url);

  try {
    await prisma.signature.create({
      data: {
        url,
        userId,
        path: url,
      },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }

  return NextResponse.json({});
}
