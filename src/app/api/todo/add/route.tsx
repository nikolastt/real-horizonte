import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prismaDb";

export async function POST() {
  const toDo = await prisma?.toDo.create({
    data: {
      description: "1 Todo",
      title: "Title description",
      userId: "clhqqclpo0002pwp0zesjfjh8",
    },
  });

  return NextResponse.json(toDo);
}
