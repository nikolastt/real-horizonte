"use client";

import React, { useState } from "react";
import Modal from "react-modal";

import { User } from "@prisma/client";

import { ClipLoader } from "react-spinners";

import FormAddTemplate from "./components/FormAddTemplate";

function ModalAddTemplate() {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    clearComponent();
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-6 py-2 hover:bg-primary/50 transition-all ease-linear"
      >
        Adicionar Template
      </button>
    );
  }

  const clearComponent = () => {
    setLoading(false);
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
        className="bg-white absolute inset-[40px] outline-none border rounded-xl overflow-auto p-[20px]"
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <h2 className="text-center font-bold text-xl uppercase">
              Adicionar Template
            </h2>

            <FormAddTemplate />
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalAddTemplate;
