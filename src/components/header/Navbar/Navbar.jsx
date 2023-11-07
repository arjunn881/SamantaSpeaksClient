import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Profile from "../../../asset/profile.png";
import appstore from "../../../asset/appstore.png";
import playstore from "../../../asset/playstore.png";
import "../../sidebar/Sidebar.css";

export const Navbar = ({ handleMenu }) => {


  return (
    <>
      <div className="sidebar navbar ">
        <div>
          <NavLink to="/" className="Menu">
            <span onClick={handleMenu}>Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/biography" className="Menu">
            <span onClick={handleMenu}>Biography</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/empowerigEducation" className="Menu">
            <span onClick={handleMenu}>Empowerig Education</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/activity" className="Menu">
            <span onClick={handleMenu}>Activity</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/internationalVisit" className="Menu">
            <span onClick={handleMenu}>International Visit</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/politics" className="Menu">
            <span onClick={handleMenu}>Politics</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/mpofkandhamal" className="Menu">
            <span onClick={handleMenu}>MP ofKandhamal</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/media" className="Menu">
            <span onClick={handleMenu}>Media</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/testimonial" className="Menu">
            <span onClick={handleMenu}>Testimonial</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/books" className="Menu">
            <span onClick={handleMenu}>Books</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/contact" className="Menu">
            <span onClick={handleMenu}>Contact</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/live" className="Menu">
            <span onClick={handleMenu}>Live</span>
          </NavLink>
        </div>

        <div className="app-download">
          <span className="span1">Download App</span>
          <div className="imgcon-dl-app">
            <img src={Profile} alt="" />
          </div>
          <div className="btncon">
            <button className="btn1" onClick={handleMenu}>
              <div>
                <img src={playstore} alt="" />
              </div>
              <span className="span">Play Store</span>
            </button>

            <button className="btn2" onClick={handleMenu}>
              <div>
                <img src={appstore} alt="" />
              </div>
              <span className="span">App Store</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


