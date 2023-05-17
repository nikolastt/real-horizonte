import React from "react";

import axios from "axios";

const add = async () => {
  const add = await axios.post("/api/todo/add");

  console.log(add, "add");
};

async function Teste() {
  return <button onClick={add}>Add</button>;
}

export default Teste;
