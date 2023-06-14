"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { Template, User } from "@prisma/client";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import { toast } from "react-hot-toast";
import UsersNotAdmin from "./components/UsersNotAdmin";
import Admins from "./components/UsersNotAdmin";
import UserCardRow from "../UserCardRow";
import { useRouter } from "next/navigation";

function ModalAddAdmin() {
  Modal.setAppElement("div");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const [template, setTemplate] = useState<Template>();

  const router = useRouter();

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
        className="bg-primary text-white px-6 py-2 hover:bg-primary/50 transition-all ease-linear"
      >
        Adicionar Admin
      </button>
    );
  }

  const addAdmin = async () => {
    setLoading(true);
    try {
      await axios.post("/api/admins", { user });
      setLoading(false);
      closeModal();
      router.refresh();
    } catch (err) {
      console.log(err);
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
              Adicionar Admin
            </h2>

            <div>
              {!user ? (
                <UsersNotAdmin setUser={setUser} />
              ) : (
                <>
                  <div className="flex flex-col gap-3 mt-3">
                    <span className="text-lg">Usuário Selecionado</span>
                    <UserCardRow
                      image={user.image!}
                      name={user.name!}
                      click={false}
                    />
                  </div>
                  <div className="w-full flex justify-center">
                    {loading ? (
                      <div className="w-full h-full flex justify-center items-center">
                        <ClipLoader size={50} />
                      </div>
                    ) : (
                      <button
                        className="button mt-3 "
                        onClick={() => addAdmin()}
                      >
                        Adicionar
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalAddAdmin;
