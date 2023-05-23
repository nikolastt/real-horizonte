import { NextResponse } from "next/server";

import { prisma } from "../../../../lib/prismaDb";

export async function POST(req: Request) {
  const { id } = await req.json();

  console.log(id);

  try {
    await prisma.signature.delete({
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err, "Error back");
    return NextResponse.error();
  }

  return NextResponse.json({});
}
