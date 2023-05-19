import Header from "@/components/landingPage/Header";
import "./globals.css";
import Footer from "@/components/landingPage/Footer";
import Head from "next/head";
import AuthProvider from "@/providers/AuthProvider";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "300", "700"],
});

export const metadata = {
  title: "Real Hosrizonte Seguros",
  description: "Real Horizonte Seguros! Garanta já o seu seguro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={nunito.className}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}
