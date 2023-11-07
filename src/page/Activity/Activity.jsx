import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Activity.css";
import "../../page/landing/Landing.css";
import { Div1 } from "./Component/Div1/Div1";
import { Div2 } from "./Component/Div2/Div2";
import { Div3 } from "./Component/Div3/Div3";

export const Activity = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="ee-span">
          <span>Activity</span>
        </div>
        <Div1 />
        <Div2 />
        <Div3 />
      </div>
    </div>
  );
};
