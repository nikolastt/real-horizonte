import Header from "@/components/landingPage/Header";
import "./globals.css";
import Footer from "@/components/landingPage/Footer";
import Head from "next/head";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: "Real Hosrizonte Seguros",
  description: "Real Horizonte Seguros! Garanta já o seu seguro.",
  icons: {
    icon: {
      url: "images/logo-seguro.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className=" ">
          <AuthProvider>
            <div className="px-3 md:px-6 lg:max-w-7xl mx-auto">
              <Header />
              <div className="h-[calc(100vh-79px)]">{children}</div>
            </div>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
