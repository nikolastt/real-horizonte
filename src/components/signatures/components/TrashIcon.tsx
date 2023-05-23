"use client";

import { storage } from "@/lib/firebase";
import axios from "axios";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import Popup from "reactjs-popup";

type Props = {
  index: number;
  path: string;
  id: string;
};

function TrashIcon({ index, id, path }: Props) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const deleteSignature = async () => {
    const notification = toast.loading("Loading...");
    setLoading(true);

    const signatureRef = ref(storage, path);

    const data = {
      id,
    };

    try {
      await axios.post(`/api/signature/delete`, data);
      await deleteObject(signatureRef);
      toast.success("Assinatura excluída", {
        id: notification,
      });
      setLoading(false);
      setOpenTooltip(false);
      router.refresh();
    } catch (err) {
      console.log(err);
      setLoading(false);
      setOpenTooltip(false);
      toast.error("Não foi possível excluir", {
        id: notification,
      });
    }
  };

  return (
    <>
      <Popup
        position="top center"
        closeOnDocumentClick
        onClose={() => setOpenTooltip(false)}
        contentStyle={{ width: "70%", padding: "15px" }}
        open={openTooltip}
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={50} className="!text-primary" />
          </div>
        ) : (
          <div>
            <span className="text-primary  font-bold text-center">
              Confirmar exclusão de assinatura?
            </span>
            <div className="w-full flex gap-3 mt-3">
              <button
                className="button-secondary w-full"
                onClick={() => setOpenTooltip(false)}
              >
                Cancelar
              </button>
              <button className="button w-full" onClick={deleteSignature}>
                Confirmar
              </button>
            </div>
          </div>
        )}
      </Popup>
      <BsTrash
        onClick={() => setOpenTooltip(true)}
        id={`trash-${index}`}
        className="text-secondary-900 z-10 absolute top-3 right-3 transition-all ease-in cursor-pointer hover:scale-110 "
        size={20}
      />
    </>
  );
}

export default TrashIcon;
