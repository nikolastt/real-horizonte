import React from "react";
import { ClipLoader } from "react-spinners";

function ClipLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ClipLoader size={50} />
    </div>
  );
}

export default ClipLoading;
