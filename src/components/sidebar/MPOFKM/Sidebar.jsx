import React from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar.css";


export const Subidebarb = () => {
  return (
    <div className="sidebar">
      <div className="main-menu">
        <NavLink to="/" className="Menu">
          <span>Main Menu</span>
        </NavLink>
      </div>
      <div  className="rest-menu">
                
      <div>
        <NavLink to="/aboutkm" className="Menu">
          <span>About Kandhamal</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/mpreport" className="Menu">
          <span>MP Reports</span>
        </NavLink>
      </div>

      </div>


    </div>
  );
};