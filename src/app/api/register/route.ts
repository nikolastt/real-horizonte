import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prismaDb";
import axios from "axios";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const image = `https://ui-avatars.com/api/?name=${name}&background=5EC92C&color=fff&rounded=true`;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      image: image,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
