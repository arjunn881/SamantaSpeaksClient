import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import  '../../page/landing/Landing.css'
import { EEdiv1 } from "./Cmponent/Div1/EEdiv1";
import './EE.css';

export const EmpoweringEducation = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="ee-span">
        <span>Empowering Education</span>
        </div>
        
        <EEdiv1/>
      </div>
    </div>
  );
};
