import ModalAddContract from "@/components/admin/modals/modalAddContract/ModalAddContract";
import ModalAddTemplate from "@/components/admin/modals/modalAddTemplate/modalAddTemplate";
import React from "react";

function Admin() {
  return (
    <div className="grid grid-cols-2 gap-3 Container">
      <ModalAddContract />
      <ModalAddTemplate />
    </div>
  );
}

export default Admin;
