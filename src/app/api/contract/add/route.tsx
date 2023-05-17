import axios from "axios";
import { prisma } from "../../../../lib/prismaDb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { email, name, userId } = await req.json();

  try {
    await prisma.contract.create({
      data: {
        title: "Primeiro Contrato",
        userId,
        signatureId: "Teste",
      },
    });
  } catch (e) {
    throw new Error("Erro ao criar contrato");
  }

  const dataEmail = {
    name,
    email,
  };

  try {
    await axios.post("http://localhost:3000/api/emails/newContract", dataEmail);

    return NextResponse.json({ status: "success" });
  } catch {
    throw new Error("Erro ao enviar E-mail");
  }

  return NextResponse.json({});
}
