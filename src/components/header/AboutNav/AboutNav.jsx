import React from "react";
import { NavLink } from "react-router-dom";

export const AboutNav = ({ handleMenu }) => {
  return (
    <div>
      <div className="sidebar navbar">
        <div className="main-menu">
          <NavLink to="/biography" className="Menu">
            <span onClick={handleMenu}>Main Menu</span>
          </NavLink>
        </div>
        <div className="rest-menu">
          <div>
            <NavLink to="/els" className="Menu">
              <span onClick={handleMenu}>Early Life Struggle</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/anr" className="Menu">
              <span onClick={handleMenu}>Awards & Mentorships</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/asb" className="Menu">
              <span onClick={handleMenu}>A Short Biography</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/tns" className="Menu">
              <span onClick={handleMenu}>Talks & Speech</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
