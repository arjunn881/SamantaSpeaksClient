import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "../../page/landing/Landing.css";
import { Div1 } from "./Component/Div1/Div1";
import { Div2 } from "./Component/Div2/Div2";

export const Politics = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="ee-span">
          <span>Politics</span>
        </div>
        <Div1 />
        <Div2/>
      </div>
    </div>
  );
};
