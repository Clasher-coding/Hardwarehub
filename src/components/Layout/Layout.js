import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../home/Header/Header"
import HeaderBottom from "../home/Header/HeaderBottom"
import SpecialCase from "../SpecialCase/SpecialCase"
import Footer from "../home/Footer/Footer"
import FooterBottom from "../home/Footer/FooterBottom";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Layout;
