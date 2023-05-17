"use client";

import axios from "axios";
import React from "react";

const add = async () => {
  await axios.post("/api/todo/add");
};

function AddTodo() {
  return <button onClick={add}>Add</button>;
}

export default AddTodo;
