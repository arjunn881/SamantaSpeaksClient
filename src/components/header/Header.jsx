import React, { useState } from "react";
import "../header/Header.css";
import Profile from "../../asset/profile.png";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Navbar } from "./Navbar/Navbar";
// import { RxCross2 } from "react-icons/rx";
import { PoliticsNav } from "./PoliticsNav/PoliticsNav";
import { AboutNav } from "./AboutNav/AboutNav";
import { MPNav } from "./MPNav/MPNav";

export const Header = () => {
  const location = useLocation();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navBar = () => {
    switch (location.pathname) {
      case "/els":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/anr":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/asb":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/tns":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/award":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/doctorates":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/memeberships":
        return menu && <AboutNav handleMenu={handleMenu} />;

      case "/cmm":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/disog":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/qop":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/spm":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/spq":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/dns":
        return menu && <PoliticsNav handleMenu={handleMenu} />;

      case "/aboutkm":
        return menu && <MPNav handleMenu={handleMenu} />;

      case "/mpreport":
        return menu && <MPNav handleMenu={handleMenu} />;

      default:
        return menu && <Navbar handleMenu={handleMenu} />;
    }
  };

  // const [popup, setPopup] = useState(true);

  // const closePopup = () => {
  //   setPopup(false);
  // };

  // const Popup = () => {
  //   return (
  //     <div className="popup-hero">
  //       <div className="popup-container">
  //         <div className="popup-close" onClick={closePopup}>
  //           <RxCross2 />
  //         </div>
  //         <div className="popup-content">
  //           <div className="popup-img-container">
  //             <img src={Profile} alt="" />
  //           </div>
  //           <div className="popup-text-container">
  //             <p>
  //               "On the other hand, we denounce with righteous indignation and
  //               dislike men who are so beguiled and demoralized by the charms of
  //               pleasure of the moment, so blinded by desire, that they cannot
  //               foresee the pain and trouble that are bound to ensue; and equal
  //               blame belongs to those who fail in their duty through weakness
  //               of will, which is the same as saying through shrinking from toil
  //               and pain. These cases are perfectly simple and easy to
  //               distinguish.”
  //             </p>
  //             <span>17th March 2023</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      {/* {popup ? (
        <Popup />
      ) : ( */}
        <div className="header">
          <div className="header-left">
            <NavLink to="/">
              <span>Samanta {"  "}</span>
              <span>Speaks</span>
            </NavLink>
          </div>

          <div className="header-right">
            <div className="header-icon-container">
              <div className="header-icon">
                <NavLink to="/">
                  <FaLinkedin className="header-icon-i" />
                </NavLink>
              </div>
              <NavLink to="/" className="header-icon">
                <FaInstagram className="header-icon-i" />
              </NavLink>
              <NavLink to="/" className="header-icon">
                <FaFacebookF className="header-icon-i" />
              </NavLink>
              <NavLink to="/" className="header-icon">
                <FaTwitter className="header-icon-i" />
              </NavLink>
            </div>

            <div className="header-profile">
              <img src={Profile} alt="" />
            </div>

            <div className="mobilebar">
              <BiMenuAltRight
                className="mobile-menu-icon"
                onClick={handleMenu}
              />

              {/* {menu && <Navbar/>} */}

              {navBar()}
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};
