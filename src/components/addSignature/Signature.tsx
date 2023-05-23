"use client";

import { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import SignaturePad from "react-signature-canvas";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type Props = {
  userId: string;
};

const addSignature = async (
  url: string,
  userId: string,
  router: AppRouterInstance
) => {
  const notification = toast.loading("Loading...");

  const data = {
    userId,
    url,
  };

  try {
    await axios.post("/api/signature", data);
    toast.success("Assinatura adicionada!", {
      id: notification,
    });
    router.replace("/app/signatures");
  } catch (e) {
    console.log(e);
    toast.error("Erro ao adicionar assinatura!", {
      id: notification,
    });
  }
};

function Signature({ userId }: Props) {
  const [trimmedDataURL, setTrimmedDataURL] = useState<string | undefined>();
  const [sigPad, setSigPad] = useState<SignaturePad | null>();

  const router = useRouter();
  const [color, setColor] = useState("");

  const teste = (router: AppRouterInstance) => {
    router.replace("/app/signature");
  };

  const clear = () => {
    sigPad?.clear();
    setTrimmedDataURL(undefined);
  };

  const trim = () => {
    setTrimmedDataURL(sigPad?.getTrimmedCanvas().toDataURL("signature/png"));
  };

  const colors = [
    {
      bg: "bg-red-400",
      hex: "#e44848",
    },
    {
      bg: "bg-green-400",
      hex: "#48e448",
    },
    {
      bg: "bg-blue-400",
      hex: "#4848e4",
    },
    {
      bg: "bg-white",
      hex: "#fff",
    },
    {
      bg: "bg-black",
      hex: "#000",
    },
  ];

  return (
    <main className={``}>
      {!trimmedDataURL && (
        <div className={`h-full `}>
          <h5 className="text-primary text-center mb-3 text-2xl font-bold">
            Escolha a cor da caneta
          </h5>

          <div className="flex justify-center gap-2 mb-3">
            {colors.map((color) => (
              <div
                key={color.bg}
                className={`w-5 h-5    ${color.bg} rounded-full  border border-white cursor-pointer  `}
                onClick={() => setColor(color.hex)}
              />
            ))}
          </div>
          <SignaturePad
            ref={(ref) => setSigPad(ref)}
            canvasProps={{
              className: `bg-primary-500 ${
                trimmedDataURL && "cursor-not-allowed"
              }  shadow-md rounded-lg   mx-auto w-full min-h-[300px]`,
            }}
            penColor={color}
          />
          <div className="flex w-full gap-3 mt-6">
            <button onClick={clear} className="button rounded w-full">
              Apagar
            </button>
            {!trimmedDataURL && (
              <button onClick={trim} className="button rounded w-full">
                Confirmar
              </button>
            )}
          </div>
        </div>
      )}

      {trimmedDataURL && (
        <div className=" flex flex-col gap-3">
          <h2 className="text-primary text-2xl font-bold text-center ">
            Assinatura
          </h2>
          <Image
            src={trimmedDataURL}
            alt="Signature"
            width={200}
            height={300}
            className="bg-white w-full min-h-[200px] p-3 rounded-lg"
          />
          <div className="flex gap-3">
            <button className="button-secondary rounded w-full">
              <a href={trimmedDataURL} download="signature.png">
                Baixar assinatura
              </a>
            </button>
            <button onClick={clear} className="button-secondary rounded w-full">
              Refazer
            </button>
          </div>

          <button
            className="button rounded"
            onClick={() => addSignature(trimmedDataURL, userId, router)}
          >
            Adicionar assinatura
          </button>

          <button onClick={() => teste(router)}>teste</button>
        </div>
      )}
    </main>
  );
}

export default Signature;
