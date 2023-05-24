import React from "react";

function Loading() {
  return (
    <div className="min-h-[calc(100vh-79px)] Container pb-40">
      <h2 className="text-primary font-bold text-xl mt-9">
        Documentos assinados
      </h2>

      <div className="grid lg:grid-cols-2 gap-3 mt-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full h-36 rounded-lg  animate-pulse bg-primary-400"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          ></div>
        ))}
      </div>

      <h2 className="text-primary font-bold text-xl mt-9">
        Documentos esperando assinatura
      </h2>

      <div className="grid lg:grid-cols-2 gap-3 mt-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full h-36 rounded-lg  animate-pulse bg-primary-400"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
