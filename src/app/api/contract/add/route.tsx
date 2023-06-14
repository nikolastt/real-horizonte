import axios from "axios";
import { prisma } from "../../../../lib/prismaDb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { email, name, userId, title, tags, templateId } = await req.json();

  try {
    await prisma.contract.create({
      data: {
        title,
        tags,
        User: {
          connect: {
            id: userId,
          },
        },
        template: {
          connect: {
            id: templateId,
          },
        },
      },
    });

    const dataEmail = {
      name,
      email,
    };

    try {
      await axios.post(
        "https://real-horizonte.vercel.app/api/emails/newContract",
        dataEmail
      );

      return NextResponse.json({ status: "success" });
    } catch {
      throw new Error("Erro ao enviar E-mail");
    }
  } catch (e) {
    console.log(e);
    throw new Error("Erro ao criar contrato");
  }

  return NextResponse.json({});
}
