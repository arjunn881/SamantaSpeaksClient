import React from "react";
import "./Div2.css";
import { NavLink } from "react-router-dom";

import a from '../../../../asset/Politics/1.png';
import b from '../../../../asset/Politics/2.png';
import c from '../../../../asset/Politics/3.png';

const politics = [
  {
    id: 1,
    img: a,
    title: "Question in Parliament",
    path:"/qop"
  },

  {
    id: 2,
    img: b,
    title: "Supplementary Questions",
    path:"/spq"
  },
  {
    id: 3,
    img: c,
    title: "Special Mentions(Zero Hour)",
    path:"/spm"
  },
  {
    id: 4,
    img: "",
    title: "Debates & Speeches",
    path:"/dns"
  },

  {
    id: 5,
    img: "",
    title: "Goverment Bills",
    path:"/disog"
  },
  {
    id: 6,
    img: "",
    title: "Committee Membership ",
    path:"/cmm"
  },
];

export const Div2 = () => {
  return (
    <div className="politics-div2">
      <div className="politics-div2-heading">
        <span>TITLE</span>
      </div>
      <div className="politics-div2-para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="politics-div2-block-container">
        {politics.map((politics) => (
          <NavLink to={politics.path} className="politics-div2-block" key={politics.id}>
            <div className="politics-div2-block-img-container">
              <img src={politics.img} alt="" />
            </div>

            <div className="politics-div2-block-text-container">
              <span>{politics.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
