import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../../asset/profile.png";
import appstore from "../../asset/appstore.png";
import playstore from "../../asset/playstore.png";
import "../sidebar/Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <NavLink to="/" className="Menu">
          <span>Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/biography" className="Menu">
          <span>About</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/empowerigEducation" className="Menu">
          <span>Empowerig Education</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/activity" className="Menu">
          <span>Activity</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/internationalVisit" className="Menu">
          <span>International Visit</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/politics" className="Menu">
          <span>Politics</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/mpofkandhamal" className="Menu">
          <span>MP of Kandhamal</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/media" className="Menu">
          <span>Media</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/testimonial" className="Menu">
          <span>Testimonial</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/books" className="Menu">
          <span>Books</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/contact" className="Menu">
          <span>Contact</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/live" className="Menu live">
          <span>Live</span><div className="red-dot"></div>
        </NavLink>
      </div>

      <div className="app-download">
        <span className="span1">Download App</span>
        <div className="imgcon-dl-app">
          <img src={Profile} alt="" />
        </div>
        <div className="btncon">
          <button className="btn1">
            <div>
              <img src={playstore} alt="" />
            </div>
            <span className="span">Play Store</span>
          </button>

          <button className="btn2">
            <div>
              <img src={appstore} alt="" />
            </div>
            <span className="span">App Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};
