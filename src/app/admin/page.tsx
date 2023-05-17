import ModalAddContract from "@/components/admin/modals/modalAddContract/ModalAddContract";
import EmailNewContract from "@/emails/templates/EmailNewContract";
import React from "react";

function Admin() {
  return (
    <div className="flex flex-col items-center">
      <ModalAddContract />
    </div>
  );
}

export default Admin;
