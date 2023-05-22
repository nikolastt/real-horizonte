"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

const templateSchemaAddContract = z.object({
  title: z.string().nonempty("Campo em branco"),
  tags: z.string().optional(),
});

export type TemplateSchemaAddContract = z.infer<
  typeof templateSchemaAddContract
>;

type Props = {
  onSubmit: (data: TemplateSchemaAddContract) => void;
};

function FormAddContract({ onSubmit }: Props) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TemplateSchemaAddContract>({
    resolver: zodResolver(templateSchemaAddContract),
  });

  return (
    <form>
      <div className="flex flex-col mt-6">
        <label htmlFor="">Título do Contrato</label>
        <input
          type="text"
          {...register("title")}
          className="border border-primary px-3 py-1 rounded-lg mt-1"
          placeholder="Título"
        />
        <span className="text-red-400 text-xs">{errors?.title?.message}</span>

        <label htmlFor="">Tags</label>
        <input
          type="text"
          {...register("tags")}
          className="border border-primary px-3 py-1 rounded-lg mt-1"
          placeholder="Tags"
        />
        <span className="text-red-400 text-xs">{errors?.tags?.message}</span>

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
            Adicionar contratoaa
          </button>
        )}
      </div>
    </form>
  );
}

export default FormAddContract;
