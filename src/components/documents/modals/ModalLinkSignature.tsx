"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Template, User } from "@prisma/client";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import { toast } from "react-hot-toast";
import UserSignatures from "../components/UserSignatures";

type Props = {
  userId?: string;
};

function ModalLinkSignatures({ userId }: Props) {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const [template, setTemplate] = useState<Template>();

  const closeModal = () => {
    clearComponent();
    setIsOpen(false);
  };
  const clearComponent = () => {
    setUser(undefined);
    setLoading(false);
    setTemplate(undefined);
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

  return (
    <>
      <Modal
        isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
        onAfterClose={clearComponent}
        onRequestClose={closeModal}
        //   style={customStyles}
        contentLabel="Example Modal"
        className="bg-white absolute inset-[40px] outline-none border rounded-xl overflow-auto p-[20px]"
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <UserSignatures userId={userId} />
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalLinkSignatures;
