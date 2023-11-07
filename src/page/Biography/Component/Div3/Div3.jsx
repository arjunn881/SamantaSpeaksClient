import React from "react";
import "./Div3.css";
import { NavLink } from "react-router-dom";

export const Div3 = () => {
  return (
    <div className="div3">
      <div className="div3-top">
        <div className="div3-block">
          <div className="div3-img-container1"></div>

          <span className="div3-span">Early Life Struggle</span>
          <NavLink to="/els">
            <button className="div3-btn">EXPLORE</button>
          </NavLink>
        </div>

        <div className="div3-block">
          <div className="div3-img-container2"></div>

          <span className="div3-span">Award & Recognition</span>
          <NavLink to="/anr">
            <button className="div3-btn">EXPLORE</button>
          </NavLink>
        </div>
      </div>
      <div className="div3-bottom">
        <div className="div3-block">
          <div className="div3-img-container3"></div>

          <span className="div3-span">A Short Biogrpahy</span>
          <NavLink to="/asb">
            <button className="div3-btn">EXPLORE</button>
          </NavLink>
        </div>

        <div className="div3-block">
          <div className="div3-img-container4">
            
          </div>

          <span className="div3-span">Talks & Speech</span>
          <NavLink to="/tns">
            <button className="div3-btn">EXPLORE</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
