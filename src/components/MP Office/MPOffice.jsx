import React from "react";
import "../MP Office/MPOffice.css";
import PARLIAMENT from '../../asset/MPOffice/1.png';
import KANDHAMAL from '../../asset/MPOffice/2.png';
import MP from '../../asset/MPOffice/3.png';
import { Link } from "react-router-dom";


export const MPOffice = () => {
  return (
    <div className="mpoffice">
      <div className="msgff-heading">
        <span className="heading2">MP OFFICE</span>
      </div>
      <div className="mpoffice-block-container">

      <Link to="/politics">
        <div className="mpoffice-block">
          <div className="mpoffice-block-img-container">
            <img src={PARLIAMENT} alt="" />
          </div>
          <div className="mpoffice-text-container">
            <span>PARLIAMENT</span>
          </div>
        </div>
        </Link>

        <Link to="/mpofkandhamal">

        <div className="mpoffice-block">
          <div className="mpoffice-block-img-container">
            <img src={KANDHAMAL} alt="" />
          </div>
          <div className="mpoffice-text-container">
            <span>KANDHAMAL</span>
          </div>
        </div>

        </Link>

        <Link to="/mpreport">
        <div className="mpoffice-block">
          <div className="mpoffice-block-img-container">
            <img src={MP} alt="" />
          </div>
          <div className="mpoffice-text-container">
            <span>MP REPORTS</span>
          </div>
        </div>

        </Link>


      </div>
    </div>
  );
};


