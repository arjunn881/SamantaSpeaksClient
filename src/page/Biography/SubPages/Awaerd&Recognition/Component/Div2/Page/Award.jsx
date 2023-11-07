import React from "react";
import "./Award.css";
import { Subidebara } from "../../../../../../../components/sidebar/Biography/Subsidebar";
import { Awards } from "../Component/Awards/Awards";

export const Award = () => {
  return (
    <div className="award">
      <div className="award-left">
        <Subidebara />
      </div>

      <div className="award-right">
        <Awards />
      </div>
    </div>
  );
};
