import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import SwiperComponent from "@/components/landingPage/Swiper";
import Image from "next/image";

import Wave from "../../public/images/waveReal.png";
import Logos from "../../public/images/logos.png";
import ElipseSeguranca from "../../public/images/EllipseSeguranca.png";
import ElipseLupa from "../../public/images/EllipseLupa.png";
import ElipsePaleta from "../../public/images/EllipsePaleta.png";
import ElipseRelogio from "../../public/images/EllipseRelogio.png";
import Ticket from "../../public/images/ticket.png";
import Refresh from "../../public/images/refresh.png";
import Elipses from "@/components/landingPage/Elipses";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <h1 className="text-3xl font-black text-center text-[#333333] mt-6">
          <span className="text-[#6953D3]">Assine seus</span>{" "}
          <span className="color text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3]   to-[#9FF980]">
            documentos
          </span>{" "}
          <br />e <span className="text-[#78D74B]">ECONOMIZE</span> papel
        </h1>

        <span className="text-[#333333] text-base text-center flex justify-center font-light mt-9 px-6">
          Conheça a mais nova solução para assinar documentos digitalmente
          integrada ao seu negócio!
        </span>

        <div className="flex justify-center mt-9">
          <button className="bg-[#84d353] rounded-full text-white font-bold py-3 w-2/3">
            SAIBA MAIS
          </button>
        </div>

        <div className="relative w-full h-[86px] mt-9">
          <Image src={Wave} fill alt="Wave" />
          <span className="absolute font-semibold text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  text-center mt-6">
            25k+{" "}
            <span className="text-[#5ec92c] ">
              de usuários em nossa plataforma!
            </span>
          </span>
        </div>

        <div className="bg-[#f9f4f4] ">
          <div className="relative w-full h-20">
            <Image src={Logos} alt="Logos" fill className="px-3 pt-6" />
          </div>

          <hr className="mt-6 w-[90%] mx-auto" />

          <h2 className="font-black text-center text-2xl mt-9 text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3] via-[#66d8f1]   to-[#9FF980]">
            Funcionalidades Incriveis
          </h2>

          <div className="flex justify-between pb-24 mt-16 px-3">
            <Elipses text="Segurança" image={ElipseSeguranca} />
            <Elipses text="Acesso aos documentos" image={ElipseLupa} />
            <Elipses text="Rápido e prático" image={ElipseRelogio} />
            <Elipses text="Assinatura ao seu estilo" image={ElipsePaleta} />
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-center mt-6 font-black">
            O{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3] via-[#66d8f1]   to-[#9FF980]">
              futuro
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53d3b4]  via-[#66f18d] to-[#d7fcdb]">
              chegou
            </span>
          </h1>

          <span className="text-[#333333] text-center flex justify-center px-3 mt-6">
            Com GREEN PAPER, os problemas de burocracia estão resolvidos.{" "}
          </span>
        </div>

        <div className="flex justify-evenly w-full mt-16">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex justify-center items-center bg-[#b4f59d]/50">
              <Image src={Ticket} alt="Tichet" />
            </div>
            <span>Sem burocracia</span>
          </div>

          <div className="flex items-center gap-3">
            <div className=" h-11 w-11 rounded-full flex justify-center items-center bg-[#b4f59d]/50">
              <Image src={Refresh} alt="Refresh" />
            </div>
            <span>Sincronização</span>
          </div>
        </div>

        <div className="flex justify-center mt-9">
          <button className="bg-[#84d353] rounded-full text-white font-bold py-3 w-2/3">
            Registre-se
          </button>
        </div>
      </main>
    </>
  );
}
