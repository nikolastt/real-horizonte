import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaDb";
import { request } from "http";

export async function POST(req: Request, res: Response) {
  const { userId, url, path } = await req.json();

  try {
    await prisma.signature.create({
      data: {
        url,
        userId,
        path,
      },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }

  return NextResponse.json({});
}
