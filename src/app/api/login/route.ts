import { request } from "http";

import { prisma } from "@/lib/prismaDb";

import * as bcrypt from "bcrypt";

type Body = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  const { email, password }: Body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // if(user && (await bcrypt.compare(password, user.password))){
  //     const {password, ...userWith} = user
  // }
}
