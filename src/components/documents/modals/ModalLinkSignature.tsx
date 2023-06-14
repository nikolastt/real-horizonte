"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Contract, Signature, Template, User } from "@prisma/client";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import { toast } from "react-hot-toast";
import UserSignatures from "../components/UserSignatures";
import { useRouter } from "next/navigation";

type Props = {
  userId?: string;
  contract: Contract;
};

function ModalLinkSignatures({ userId, contract }: Props) {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const closeModal = () => {
    clearComponent();
    setIsOpen(false);
  };
  const clearComponent = () => {
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="button-secondary rounded"
      >
        Atribuir assinatura
      </button>
    );
  }

  const signinDoc = async (signature: Signature) => {
    const notification = toast.loading("Loading...");
    setLoading(true);

    const data = {
      signatureId: signature.id,
      contractId: contract.id,
      userId: contract.userId,
    };

    try {
      await axios.post("/api/contract/sign", data);
      toast.success("Contrato assinado!", { id: notification });
      closeModal();
      router.refresh();
    } catch (e) {
      toast.error("Erro ao assinar o contrato!", { id: notification });
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
        onAfterClose={clearComponent}
        onRequestClose={closeModal}
        //   style={customStyles}
        contentLabel="Example Modal"
        className="bg-white absolute inset-[40px] lg:inset-20 outline-none border rounded-xl overflow-auto p-[20px]"
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <UserSignatures userId={userId} signinDoc={signinDoc} />
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalLinkSignatures;
