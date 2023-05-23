import "./globals.css";

import AuthProvider from "@/providers/AuthProvider";

import { Nunito } from "next/font/google";

import { Toaster } from "react-hot-toast";

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
      <html lang="pt-BR">
        <body className={nunito.className}>
          <AuthProvider>{children}</AuthProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#0e1225",
                color: "#f8a961",
              },

              // Default options for specific types
              success: {
                duration: 5000,
              },
            }}
          />
        </body>
      </html>
    </>
  );
}
