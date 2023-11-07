import React from "react";
import "./Div3.css";
import { NavLink } from "react-router-dom";

const university = [
  {
    id: 1,
    img: "",
    name: "University Name",
    year: 2013,
  },
  {
    id: 2,
    img: "",
    name: "University Name",
    year: 2013,
  },
  {
    id: 3,
    img: "",
    name: "University Name",
    year: 2013,
  },
  {
    id: 4,
    img: "",
    name: "University Name",
    year: 2013,
  },
  {
    id: 5,
    img: "",
    name: "University Name",
    year: 2013,
  },
  {
    id: 6,
    img: "",
    name: "University Name",
    year: 2013,
  },
];
export const Div3 = () => {
  return (
    <div className="anr-div3">
      <span className="awards-span">Doctorates</span>
      <div className="anr-div3-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="anr-div3-block-container">
          <div className="anr-div3-block">
            <div className="anr-div3-block-img">
              <img src="" alt="" />
            </div>
          </div>

          <div className="anr-div3-block">
            <div className="anr-div3-block-img">
              <img src="" alt="" />
            </div>
          </div>

          <div className="anr-div3-block">
            <div className="anr-div3-block-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="anr-degree-container">
          <div className="anr-degree-university-name-left">
            {university.map((data) =>
              data.id % 2 !== 0 ? (
                <div className="anr-degree-university-name" key={data.id}>
                  <div className="anr-degree-img-container">
                    <img src="" alt="" />
                  </div>

                  <div className="anr-degree-text-container">
                    <span className="anr-degree-text-container-span">{data.name}</span>
                    <span>{data.year}</span>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className="anr-degree-university-name-right">
            {university.map((data) =>
              data.id % 2 === 0 ? (
                <div className="anr-degree-university-name" key={data.id}>
                  <div className="anr-degree-img-container">
                    <img src="" alt="" />
                  </div>

                  <div className="anr-degree-text-container">
                    <span className="anr-degree-text-container-span">{data.name}</span>
                    <span>{data.year}</span>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <NavLink to="/doctorates" className="msgff-view">
          <span>View All</span>
          <i class="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </div>
  );
};
