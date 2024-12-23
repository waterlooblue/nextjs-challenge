import type { Metadata } from "next";
import { Roboto, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Christopher Norkett",
  description: "Coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${lato.variable}`}
      >
        <div className="overflow-hidden xl:container flex flex-col justify-between min-h-screen bg-white shadow-xl">
          <Header/>
          <main className="grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
