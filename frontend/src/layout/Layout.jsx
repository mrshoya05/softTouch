//here i will create  a layout  where we callour header and footer  using react outlet.

import React from "react";
import Header from "../components/Header";  //importing header
import Footer from "../components/Footer";  //importing footer
import { Outlet } from "react-router-dom";

const Layout = ( ) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}

export default Layout;

