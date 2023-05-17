// "use client";

import React, { useState, useEffect } from "react";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";
import { Img } from "@react-email/img";
import { Section } from "@react-email/section";
import { Column } from "@react-email/column";

type Props = {
  name: string;
};

export default function EmailNewContract({ name }: Props) {
  // const [clientSide, setClientSide] = useState(false);

  // useEffect(() => {
  //   setClientSide(true);
  // }, []);

  return (
    // !!clientSide && (
    <Html lang="pt-BR">
      <div style={{ backgroundColor: "#add9c9" }}>
        <Tailwind>
          <Container className="mx-auto bg-white px-6 font-sans">
            <Section className=" p-10">
              <Img
                className="mx-auto"
                width={200}
                src="https://real-horizonte-seguros.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-seguro.a69a307a.png&w=256&q=75"
              />
            </Section>

            <h1 className="text-[3rem] mt-6">Novo Documento</h1>

            <Section className="text-black ">
              <Text className="text-lg">Hello, {name}</Text>
              <Text className="text-lg">
                Um novo documento está disponível para assinatura!
              </Text>

              <Text className="text-lg">
                Consulte seus documentos em nosso app. ⬇️
              </Text>
            </Section>

            <Section className="text-center mt-6">
              <Button
                href="https://cross-module-v2-beta.vercel.app/app"
                className="bg-[#0e1225]   text-white px-6 py-2 hover:bg-primary/50 transition-all ease-linear"
              >
                Meus Documentos
              </Button>
            </Section>

            {/* <Section className="mt-9">
                <Column>
                  <Text className="text-black text-lg">See you in class!</Text>
                </Column>
                <Column>
                  <Img
                    className="ml-auto"
                    width={200}
                    src="https://firebasestorage.googleapis.com/v0/b/cross-module.appspot.com/o/calendar-removebg-preview.png?alt=media&token=2fea30ee-220f-4210-8f25-af7cc00b4dba"
                  />
                </Column>
              </Section> */}

            <Container className="mx-auto mt-12">
              <Section className="text-center bg-white pt-6">
                <Text className="text-black text-lg m-0">Alguma Dúvida?</Text>
                <Text className="text-black text-lg m-0">
                  Nos chame no WhatsApp
                </Text>

                <Button
                  className="mt-3 cursor-pointer mb-9"
                  href="https://wa.me/553187213288?text=Ola%20gostaria%20de%20esclarecer%20uma%20duvida%20!%20"
                >
                  <Img
                    width={40}
                    src="https://ci3.googleusercontent.com/proxy/esCfg2hHc9-z4pbu2xXL0xrvbPFOrHbm1MSSH0SH9x1SZXEyS0UqTqywQ_GIiqpG_XWpvAY6F-UV1XUEkp4BGCs92BlfscTiOH4=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                  />
                </Button>
              </Section>
            </Container>
          </Container>
        </Tailwind>
      </div>
    </Html>
    // )
  );
}
