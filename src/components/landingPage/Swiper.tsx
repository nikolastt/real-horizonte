"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      // autoplay={{
      //   delay: 1800,
      //   disableOnInteraction: false,
      // }}
      modules={[Navigation, Pagination]}
      className="mySwiper w-full h-[400px] md:h-[500px] "
    >
      <SwiperSlide className="justify-center  ">
        <div className="w-full  h-full relative">
          <img
            className=" w-full h-full  object-cover"
            src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Banner/Previdencia-Para-Crianca.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="justify-center flex">
        <div className="w-full relative h-full">
          <img
            className=" object-cover w-full  h-full"
            src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Banner/Seguro-Saude.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="justify-center flex">
        <div className="w-full relative h-full">
          <img
            className=" object-cover w-full h-full"
            src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Banner/Seguro-Vida.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="justify-center flex">
        <div className="w-full relative h-full">
          <img
            className=" object-cover w-full h-full"
            src="https://construtor.oncorretor.com.br/webshared/home/1Produtos/Banner/Seguro-Auto.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
