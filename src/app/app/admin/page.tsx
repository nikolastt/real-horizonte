import ModalAddContract from "@/components/admin/modals/modalAddContract/ModalAddContract";
import ModalAddTemplate from "@/components/admin/modals/modalAddTemplate/modalAddTemplate";
import React from "react";

function Admin() {
  return (
    <div className="flex flex-col items-center">
      <ModalAddContract />
      <ModalAddTemplate />
    </div>
  );
}

export default Admin;
