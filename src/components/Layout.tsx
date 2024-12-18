import React, { ReactNode } from "react";
import Header from "./Header";
import { HeaderModel } from "@/models/Header";
import { FooterModel } from "@/models/Footer";

interface LayoutProps {
  header: HeaderModel;
  footer: FooterModel;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  return (
    <>
      <Header data={header}/>
      <main>{children}</main>
      <footer/>
    </>
  );
};

export default Layout;
