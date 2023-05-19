import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#484c4f] mt-6 ">
      <div className="py-9 px-3 md:px-6 lg:max-w-7xl mx-auto flex flex-col gap-12 lg:grid lg:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold uppercase text-white">
            Redes Sociais
          </h2>
          <hr />

          <div className="flex justify-center items-center gap-1 mt-6">
            <button className="flex bg-[#649d0a] text-white items-center px-2 py-1 rounded">
              <FaFacebookSquare size={30} />
              <span className="ml-1 uppercase">Facebook</span>
            </button>

            <button className="flex bg-[#649d0a] text-white items-center px-2 py-1 rounded">
              <AiFillYoutube size={30} />
              <span className="ml-1 uppercase">Youtube</span>
            </button>

            <button className="flex bg-[#649d0a] text-white items-center px-2 py-1 rounded">
              <AiFillInstagram size={30} />
              <span className="ml-1 uppercase">Instagram</span>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase text-white">
            Solicite Uma Proposta
          </h2>
          <hr />

          <div className="flex justify-center items-center gap-1 mt-6">
            <button className="flex bg-[#649d0a] text-slate-300 items-center px-2 py-1 rounded">
              <span className="ml-1 uppercase">Solicite uma proposta</span>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase text-white">
            Politica de qualidade
          </h2>
          <hr />

          <div className="flex justify-center items-center gap-1 mt-6">
            <button className="flex bg-[#649d0a] text-slate-300 items-center px-2 py-1 rounded">
              <span className="ml-1 uppercase">
                politica de qualidade e segurança da informação
              </span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold uppercase text-white">
            Indicou, fechou ganhou!
          </h2>
          <hr />

          <div className="flex flex-col justify-center items-center gap-1 mt-6">
            <h3 className="text-white font-semibold">Não perca tempo!</h3>
            <button className="flex bg-[#649d0a] text-slate-300 items-center px-2 py-1 rounded mt-3">
              <span className="ml-1 uppercase">
                Qlique aqui para saber mais
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#3c3f42] p-9 text-center ">
        <h3 className="uppercase text-white font-bold">
          REAL HORIZONTE SEGUROS E PREVIDÊNCIA PRIVADA
        </h3>

        <div className="text-sm mt-1 gap-1 flex flex-col">
          <span className="text-white font-semibold">
            RUA GUERRA JUNQUEIRO 11 | SALA 10 - SANTA
          </span>
          <span className="text-white font-semibold">
            BRANCA - 31565-230 - Belo Horizonte/MG
          </span>
          <span className="text-white font-semibold">
            (31) 3261-6003(31) 3024-6003(31) 98661-3718
          </span>
          <span className="text-white font-semibold flex items-center justify-center mt-3">
            <AiOutlineWhatsApp size={20} />{" "}
            <span className="ml-3">(31) 98661-3718</span>
          </span>
        </div>

        <a href="mailto:REALHORIZONTE@REALHORIZONTE.COM.BR">
          <h2 className="mt-6 text-[#a4d460]">
            REALHORIZONTE@REALHORIZONTE.COM.BR
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Footer;
