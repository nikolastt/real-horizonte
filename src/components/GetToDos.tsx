import React from "react";

import { prisma } from "../lib/prismaDb";

const get = async () => {
  const toDo = await prisma.toDo.findMany();

  return toDo;
};

async function GetToDos() {
  const toDos = await get();

  return (
    <div>
      {toDos.map((toDof) => (
        <div key={toDof.id}>
          {toDof.title}
          {toDof.description}
        </div>
      ))}
    </div>
  );
}

export default GetToDos;
