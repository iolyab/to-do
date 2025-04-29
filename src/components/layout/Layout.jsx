import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
