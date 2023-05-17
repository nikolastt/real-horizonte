"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import AllUsers from "./components/AllUsers";
import { User } from "@prisma/client";
import UserCardRow from "./components/UserCardRow";
import { ClipLoader } from "react-spinners";
import axios from "axios";

function ModalAddContract() {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>();
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
        Adicionar Contrato
      </button>
    );
  }

  const clearComponent = () => {
    setUser(undefined);
    setLoading(false);
  };

  const setUserSelected = (user: User) => {
    setUser(user);
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      const data = {
        email: user?.email,
        name: user?.name,
        userId: user?.id,
      };

      await axios.post("/api/contract/add", data);

      closeModal();
    } catch (e) {
      console.log(e);
      setLoading(false);
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
        className="bg-white absolute inset-[40px] outline-none border rounded-xl overflow-auto p-[20px]"
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <h2 className="text-center font-bold text-xl uppercase">
              Adicionar contrato
            </h2>

            <div>
              {!user ? (
                <AllUsers setUser={setUserSelected} />
              ) : (
                <div className="flex flex-col gap-3 mt-3">
                  <span className="text-lg">Usuário Selecionado</span>
                  <UserCardRow
                    image={user.image!}
                    name={user.name!}
                    click={false}
                  />

                  <button className="button " onClick={handleAdd}>
                    Adicionar contrato
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalAddContract;
