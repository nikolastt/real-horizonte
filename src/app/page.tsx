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
import Tel from "../../public/images/tel.png";
import Elipses from "@/components/landingPage/Elipses";
import Refresh from "../../public/images/refresh.png";
import Paper from "../../public/images/paper.png";
import Pen from "../../public/images/pen.png";
import Bubbles2 from "../../public/images/bubbles2.png";

import Arvore from "../../public/images/arvore.png";
import Banner from "../../public/images/banner.png";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <div className="md:h-[calc(100vh-79px)] relative Container">
          <button className="hidden md:flex px-6 py-3 rounded bg-[#33ed7e]/25 mt-12">
            Assinatura Digital
          </button>
          <h1 className="text-2xl font-black text-center text-[#333333] mt-24 md:text-left md:text-6xl md:mt-32 ">
            <span className="text-[#6953D3]">Assine seus</span>{" "}
            <span className="color text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3]   to-[#9FF980]">
              documentos
            </span>{" "}
            <br />e <span className="text-[#78D74B]">ECONOMIZE</span> papel
          </h1>

          <span className="text-[#333333] text-base text-center flex justify-center font-light mt-12 md:text-left md:justify-start md:text-xl">
            Conheça a mais nova solução para assinar documentos{" "}
            <br className="hidden md:flex" /> digitalmente integrada ao seu
            negócio!
          </span>

          <Link href="/app">
            <div className="flex justify-center mt-24 md:justify-start md:mt-24">
              <button className="bg-[#84d353] rounded-full text-white font-bold py-3 w-2/3 md:w-[240px] ">
                CADASTRAR
              </button>
            </div>
          </Link>

          <Image
            src={Pen}
            alt="Pen"
            className=" absolute opacity-5 md:opacity-100 top-1/2 transform -translate-y-1/2 right-0 -z-10 xl:scale-150"
          />
        </div>

        <div className="relative w-full h-[86px] mt-36 ">
          <Image src={Wave} fill alt="Wave" />
          <span className="absolute font-semibold text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  text-center mt-12 md:text-3xl md:mt-24">
            25k+{" "}
            <span className="text-[#5ec92c] ">
              de usuários em nossa plataforma!
            </span>
          </span>
        </div>

        <div className="bg-[#f9f4f4] pt-12 md:pt-32 NoContainer">
          <div className="Container">
            <div className="relative w-full h-20 md:h-28">
              <Image src={Logos} alt="Logos" fill className="px-3 pt-6" />
            </div>

            <hr className="mt-6 w-[90%] mx-auto md:mt-16" />

            <span className=" flex justify-center font-black text-center text-2xl mt-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3] via-[#66d8f1]   to-[#9FF980] md:mt-16 md:text-5xl">
              Funcionalidades Incriveis
            </span>

            <div className="flex justify-between pb-24 mt-16 px-3 md:justify-evenly md:mt-40">
              <Elipses text="Segurança" image={ElipseSeguranca} />
              <Elipses text="Acesso aos documentos" image={ElipseLupa} />
              <Elipses text="Rápido e prático" image={ElipseRelogio} />
              <Elipses text="Assinatura ao seu estilo" image={ElipsePaleta} />
            </div>
          </div>
        </div>

        <div>
          <div className="md:flex md:flex-col md:items-end md:w-full md:relative md:h-[calc(100vh-120px)] Container">
            <div className="md:mt-24 ">
              <h1 className="text-3xl text-center mt-16 font-black md:text-left md:text-4xl">
                O{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3] via-[#66d8f1]   to-[#9FF980]">
                  futuro
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53d3b4]  via-[#66f18d] to-[#d7fcdb]">
                  chegou
                </span>
              </h1>

              <span className="text-[#333333] text-center flex justify-center  mt-12 md:justify-start md:text-left md:mt-24">
                Com GREEN PAPER, os problemas de burocracia estão{" "}
                <br className="hidden md:flex" /> resolvidos.{" "}
              </span>
              <div className="flex flex-col items-center justify-center gap-9 w-full mt-16 md:flex-col md:gap-9 md:mt-24">
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
              <div className="flex justify-center mt-20 md:justify-start z-50 md:mt-16">
                <Link
                  href="/app"
                  className="bg-[#84d353] rounded-full text-white font-bold py-3 w-2/3 flex justify-center items-center"
                >
                  Registre-se
                </Link>
              </div>
            </div>

            <div className="w-3/5 h-full  md:absolute top-24 left-0 -z-10">
              <Image
                src={Paper}
                alt="Paper"
                fill
                className="hidden md:flex top-0 left-0"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 flex-col-reverse md:flex-row justify-center items-center mt-24  md:justify-between Container md:h-[calc(100vh-120px)]">
          <div className="md:w-1/2   flex justify-center items-center">
            <div className="flex flex-col items-center justify-center max-w-[500px] ">
              <h2 className="text-center text-3xl font-bold">
                Dipositivo móvel
              </h2>

              <div className="bg-[#b4f59d] p-3 rounded">
                <h3 className="text-[#4b2fd2]">
                  Tenha sempre em mão seus documentos
                </h3>
                <p className="font-thin">
                  Com nosso site responsivo nunca foi tão fácil ter tudo em
                  mãos, agora você pode acessar seus documentos de qualquer
                  lugar
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:flex md:justify-center md:items-center">
            <Image src={Tel} alt="Tel" className="md:scale-150" />
          </div>
        </div>
        <div className="mt-36 md:h-[calc(100vh-120px)] md:flex md:flex-row-reverse Container relative">
          <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
            <h2 className="font-black text-3xl text-center mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6953D3]   to-[#5EC92C] ">
              + SUSTENTABILIDADE
            </h2>

            <span className="text-[#333333] text-center text-sm font-light flex justify-center px-3 mt-6 md:mt-24">
              Milhões de toneladas de papel e arquivos são jogadas a natureza
              devido á assinatura de documentos. Agora isso acabou.{" "}
            </span>

            <div className="flex justify-evenly px-3 mt-9 md:mt-24">
              <ol className="list-disc text-[#333333]">
                <li>Economize papel</li>
                <li>Economize árvores</li>
                <li>Economize tempo</li>
              </ol>

              <ol className="list-disc">
                <li>Ganhe tempo</li>
                <li>Ganhe clientes</li>
                <li>Ganhe o mundo!</li>
              </ol>
            </div>

            <div className="flex justify-center mt-9 md:mt-24">
              <Link
                href="/app"
                className="bg-[#84d353] rounded-full text-white font-bold py-3 w-2/3 flex justify-center"
              >
                Descubra agora
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-9 md:w-1/2 items-center">
            <Image src={Arvore} alt="arvore" className="md:h-1/2" />
          </div>

          <Image
            src={Bubbles2}
            alt="Bubbles"
            className="absolute -top-96 -z-10 right-0"
          />
        </div>

        <div className="flex justify-center items-center mt-6 md:w-full">
          <Image src={Banner} alt="Banner" className="" />
        </div>

        <hr className="mt-16 w-[90%] mx-auto" />

        <span className="flex justify-center items-center text-center text-sm mt-3 font-thin mb-6">
          © 2023 copyrights by Green Paper . All Rights Reserved.
        </span>
      </main>
    </>
  );
}
