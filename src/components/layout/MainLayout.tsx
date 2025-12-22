import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

import Navbar from "./navbar/Navbar";
// import HeroSection from "../home/hero/HeroSection";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="grow flex-1 px-10">
          {/* <HeroSection /> */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default MainLayout;
