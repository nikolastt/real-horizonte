import React from "react";

function Loading() {
  return (
    <div className="min-h-[calc(100vh-79px)] Container pb-40">
      <h2 className="text-2xl text-primary font-bold pt-9 ">
        Minhas Assinaturas
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6 ">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="w-full h-28 rounded-lg  animate-pulse bg-primary-400"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Loading;
