import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Outlet/>
      {/* <CartOffcanvas />
      <main className="ax-layout-main"><Outlet /></main>
      <Footer /> */}
      <Footer />
    </div>
  );
};

export default Layout;
