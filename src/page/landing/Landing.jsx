import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Mainbar } from "../../components/Main/Mainbar";
import "../../page/landing/Landing.css";
import { HeroBanner } from "../../components/Herobanner/HeroBanner";

export const Landing = () => {
  return (
    <>
      <HeroBanner />

      <div className="home">
        <div className="left">
          <Sidebar />
        </div>

        <div className="right">
          <Mainbar />
        </div>
      </div>
    </>
  );
};
