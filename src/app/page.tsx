import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import SwiperComponent from "@/components/landingPage/Swiper";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`relative gap-3 flex flex-col Container`}>
        <div className="p-3 bg-gray-200">
          <SwiperComponent />
        </div>

        <div className="p-12 bg-gray-200 flex flex-col justify-center gap-12 md:grid md:grid-cols-2">
          <div className="w-full  flex justify-center">
            <img
              src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Quadrado/Seguro-Residencia-Premium.jpg"
              alt="Image Seguro Residencia Premium"
              className="object-fill"
            />
          </div>

          <div className="w-full  flex justify-center">
            <img
              src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Quadrado/Seguro-bike.jpg"
              alt="Image Seguro Residencia Premium"
              className="object-contain"
            />
          </div>

          <div className="w-full  flex justify-center">
            <img
              src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Quadrado/Previdencia-Para-Criancas.jpg"
              alt="Image Seguro Residencia Premium"
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold uppercase text-2xl ">
              Porto Seguro Residência
            </h1>
            <hr className="border-slate-400 mt-1" />

            <div className="mt-6">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/bMqw3BwyB28"
                title="Porto Seguro Residência |A sua casa segura por menos do que você imagina"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
