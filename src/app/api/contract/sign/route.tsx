import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prismaDb";
import axios from "axios";

export async function POST(req: Request) {
  const { signatureId, contractId, userId } = await req.json();

  const now = new Date();

  try {
    await prisma.contract.update({
      where: {
        id: contractId,
      },
      data: {
        signatureId,
        signedIn: now,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    const dataEmail = {
      name: user?.name,

      email: user?.email,
    };

    try {
      await axios.post(
        "https://real-horizonte.vercel.app/api/emails/signContract",
        dataEmail
      );

      return NextResponse.json({ status: "success" });
    } catch {
      throw new Error("Erro ao enviar E-mail");
    }
    return NextResponse.json({});
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
