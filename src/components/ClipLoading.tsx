import React from "react";
import { ClipLoader } from "react-spinners";

function ClipLoading() {
  return (
    <div className="w-full h-full bg-red-500 flex justify-center items-center">
      <ClipLoader size={50} />
    </div>
  );
}

export default ClipLoading;
