"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const templateSchema = z.object({
  name: z.string().nonempty("Campo em branco"),
});

type Template = z.infer<typeof templateSchema>;

function FormAddTemplate() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Template>({
    resolver: zodResolver(templateSchema),
  });

  const onSubmit = async (data: Template) => {
    setLoading(true);

    try {
      axios.post("/api/template", data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <form>
      <div className="flex flex-col mt-6">
        <label htmlFor="">Name</label>
        <input
          type="text"
          {...register("name")}
          className="border border-primary px-3 py-1 rounded-lg mt-1"
          placeholder="Name"
        />
        <span className="text-red-400 text-xs">{errors?.name?.message}</span>

        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="button-form mt-3"
          >
            Adicionar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormAddTemplate;
