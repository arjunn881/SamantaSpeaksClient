import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import './Biography.css'



import  '../../page/landing/Landing.css'
import { Div1 } from "./Component/Div1/Div1";
import { Div4 } from "./Component/Div4/Div4";
import { Div3 } from "./Component/Div3/Div3";
import { Div2 } from "./Component/Div2/Div2";


export const Biography = () => {


  return (
    <div className="biography">
      <div className="biography-left">
        
        <Sidebar />
      </div>

      <div className="biography-right">
        
      <Div1/>
      <Div2/>
      <Div3/>
      <Div4/>

      </div>

      
    </div>
  );
};