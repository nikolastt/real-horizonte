"use client";

import React, { useState } from "react";
import Modal from "react-modal";

function ModalVizualizerPdf() {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

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
        className="bg-primary text-white px-6 py-2 hover:bg-primary/50 transition-all ease-linear"
      >
        Adicionar Contrato
      </button>
    );
  }

  const onSubmitAddContract = async () => {
    // // setLoading(true);
    // try {
    //   const dataAxios = {
    //     email: user?.email,
    //     name: user?.name,
    //     userId: user?.id,
    //     title: data.title,
    //     tags: data.tags,
    //     templateId: template?.id,
    //   };
    //   await axios.post("/api/contract/add", dataAxios);
    //   // closeModal();
    // } catch (e) {
    //   console.log(e);
    //   setLoading(false);
    // }
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
        <h1>Pdf Modal</h1>
      </Modal>
    </>
  );
}

export default ModalVizualizerPdf;
