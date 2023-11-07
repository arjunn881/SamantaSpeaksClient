import React from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar.css";
import './Subsidebar.css';

export const Subidebara = () => {
  return (
    <div className="sidebar">
      <div className="main-menu">
        <NavLink to="/biography" className="Menu">
          <span>Main Menu</span>
        </NavLink>
      </div>
      <div  className="rest-menu">
                
      <div>
        <NavLink to="/els" className="Menu">
          <span>Early Life Struggle</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/anr" className="Menu">
          <span>Awards & Mentorships</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/asb" className="Menu">
          <span>A Short Biography</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/tns" className="Menu">
          <span>Talks & Speech</span>
        </NavLink>
      </div>

      </div>

      


    </div>
  );
};