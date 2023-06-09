"use client";

import ClipLoading from "@/components/ClipLoading";
import { Signature } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSignature from "./CardSignature";
import Link from "next/link";

type Props = {
  userId?: string;
  signinDoc: (signature: Signature) => void;
};

function UserSignatures({ userId, signinDoc }: Props) {
  const [signatures, setSignatures] = useState<Signature[]>();

  const [signatureSelected, setSignatureSelected] = useState<Signature>();

  const [loadingSignatures, setLoadingSignatures] = useState(true);

  useEffect(() => {
    const getUserSignatures = async () => {
      const signaturesDb = await (
        await axios.post("/api/signature/getWithUser", { userId })
      ).data;

      setSignatures(signaturesDb);
      setLoadingSignatures(false);
    };
    getUserSignatures();
  }, []);

  return (
    <>
      <div className=" w-full">
        {loadingSignatures ? (
          <ClipLoading />
        ) : (
          <>
            {!signatureSelected ? (
              <>
                {signatures && signatures?.length > 0 && (
                  <>
                    <h2 className=" font-bold  ">Selecione uma assinatura</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-3 w-full">
                      {signatures?.map((signature) => (
                        <CardSignature
                          key={signature.id}
                          signature={signature}
                          setSignature={setSignatureSelected}
                          clickable
                        />
                      ))}
                    </div>
                  </>
                )}

                {signatures && signatures.length === 0 && (
                  <div className="w-full justify-center pt-24">
                    <h2 className="text-center">
                      Você não possui nenhuma assinatura cadastrada!
                    </h2>

                    <Link
                      className="flex justify-center pt-6"
                      href="/app/addSignature"
                    >
                      <button className="button rounded">
                        Criar Assinatura
                      </button>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="max-w-5xl mx-auto">
                <h2 className=" font-bold  mb-6">Assinatura selecionada</h2>
                <div className="w-1/2 flex justify-center">
                  <CardSignature signature={signatureSelected} />
                </div>

                <button
                  onClick={() => signinDoc(signatureSelected)}
                  className="button rounded w-full mt-3"
                >
                  Assinar Documento
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default UserSignatures;
