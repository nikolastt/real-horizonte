import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prismaDb";

export async function POST(req: Request, res: Response) {
  const { userId } = await req.json();

  try {
    const signatures = await prisma.signature.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(signatures);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
