import React from "react";
import "./Div4.css";
import { NavLink } from "react-router-dom";

const Membership = [
  {
    id: 1,
    img: "",
    desc: "President, Volleyball Federation of India",
  },

  {
    id: 2,
    img: "",
    desc: "President, Volleyball Federation of India",
  },

  {
    id: 3,
    img: "",
    desc: "President, Volleyball Federation of India",
  },

  {
    id: 4,
    img: "",
    desc: "President, Volleyball Federation of India",
  },

  {
    id: 5,
    img: "",
    desc: "President, Volleyball Federation of India",
  },

  {
    id: 6,
    img: "",
    desc: "President, Volleyball Federation of India",
  },
];

export const Div4 = () => {
  return (
    <div className="anr-div4">
      <span className="awards-span">Membership</span>
      <div className="anr-div4-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          odio ut, error magni repellendus aliquid vero? Unde, nam corrupti
          voluptatibus cumque quo quis repudiandae eligendi. Voluptate fugiat
          nobis velit? Modi!
        </p>
      </div>

      <div className="anr-degree-container">
        <div className="anr-degree-university-name-left">
          {Membership.map((data) =>
            data.id % 2 !== 0 ? (
              <div className="anr-degree-university-name" key={data.id}>
                <div className="anr-degree-img-container">
                  <img src="" alt="" />
                </div>

                <div className="anr-degree-text-container">
                  <span className="anr-degree-text-container-span">{data.desc}</span>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        <div className="anr-degree-university-name-right">
          {Membership.map((data) =>
            data.id % 2 === 0 ? (
              <div className="anr-degree-university-name" key={data.id}>
                <div className="anr-degree-img-container">
                  <img src="" alt="" />
                </div>

                <div className="anr-degree-text-container">
                  <span className="anr-degree-text-container-span">{data.desc}</span>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>

      <NavLink to="/memberships" className="msgff-view">
        <span>View All</span>
        <i class="fa-solid fa-arrow-right"></i>
      </NavLink>
    </div>
  );
};
