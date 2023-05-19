import React from "react";
import { BeatLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-screen h-screen z-50 bg-slate-900/80 flex justify-center items-center inset-0">
      <BeatLoader size={100} />
    </div>
  );
}

export default Loading;
