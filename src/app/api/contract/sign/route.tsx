import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { signatureId, contractId } = await req.json();

  const now = new Date();

  try {
    await prisma?.contract.update({
      where: {
        id: contractId,
      },
      data: {
        signatureId,
        signedIn: now,
      },
    });
    return NextResponse.json({});
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
