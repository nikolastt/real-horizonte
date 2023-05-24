import { NextResponse } from "next/server";

export async function PUT(req: Request) {
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
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }

  console.log(signatureId, contractId);

  return NextResponse.json({});
}
