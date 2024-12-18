import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HeaderModel } from "@/models/Header";
import { FooterModel } from "@/models/Footer";

interface LayoutProps {
  header: HeaderModel;
  footer: FooterModel;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  return (
    <div className="overflow-hidden xl:container flex flex-col justify-between min-h-screen bg-white shadow-xl">
      <Header data={header}/>
      <main className="grow">{children}</main>
      <Footer data={footer}/>
    </div>
  );
};

export default Layout;
