import React from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar.css";
import './Subsidebar.css';

export const Subidebarc = () => {
  return (
    <div className="sidebar">
      <div className="main-menu">
        <NavLink to="/politics" className="Menu">
          <span>Main Menu</span>
        </NavLink>
      </div>
      <div  className="rest-menu">
                
      <div>
        <NavLink to="/qop" className="Menu">
          <span>Question on Parliament</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/spq" className="Menu">
          <span>Supplementary Question</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/spm" className="Menu">
          <span>Special Mentions</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dns" className="Menu">
          <span>Debate & Speaks</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/disog" className="Menu">
          <span>Discussion on Government</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/cmm" className="Menu">
          <span>Committee Membership</span>
        </NavLink>
      </div>

      </div>


    </div>
  );
};