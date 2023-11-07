import React from "react";
import "./ANR.css";
import { Subidebara } from "../../../../components/sidebar/Biography/Subsidebar";
import { Div1 } from "./Component/Div1/Div1";
import { Div2 } from "./Component/Div2/Div2";
import { Div3 } from "./Component/Div3/Div3";
import { Div4 } from "./Component/Div4/Div4";

export const ANR = () => {
  return (
    <div className="anr">
      <div className="anr-left">
        <Subidebara />
      </div>

      <div className="anr-right">
        <div className="tns-heading">
          <span>Awards & Recognition</span>
          <Div1/>
          <Div2/>
          <Div3/>
          <Div4/>
        </div>
      </div>
    </div>
  );
};
