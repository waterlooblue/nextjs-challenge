// components/Layout.tsx
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header/>
      <main>{children}</main>
      <footer/>
    </>
  );
};

export default Layout;
