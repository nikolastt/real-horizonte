import { prisma } from "../../../lib/prismaDb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { name } = await req.json();

  try {
    await prisma.template.create({
      data: {
        name,
      },
    });
  } catch {
    return NextResponse.error();
  }

  return NextResponse.json({ });
}

export async function GET() {
  const templates = await prisma.template.findMany();

  return NextResponse.json(templates);
}
