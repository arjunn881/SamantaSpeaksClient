import React from "react";
import "../PioneerEfforts/PioneerEffort.css";
import a1 from "../../asset/PioneerEffort/1.png";
import a2 from "../../asset/PioneerEffort/2.png";
import a3 from "../../asset/PioneerEffort/3.png";
import a4 from "../../asset/PioneerEffort/4.png";

const pioneerEffort = [
  {
    id: 1,
    img: a1,
    title: "Women Empowerment",
  },

  {
    id: 2,
    img: a2,
    title: "Sustainable Development & Team",
  },

  {
    id: 3,
    img: a3,
    title: "Health and Well Being",
  },

  {
    id: 4,
    img: a4,
    title: "Culture, Media and Spiritualism",
  },
];

export const PioneerEffort = () => {
  return (
    <>
      <div className="pioneer-effort">
        <div className="pioneer-effort-heading">
          <span>PIONEER EFFORTS</span>
        </div>
        <div className="pioneer-effort-block-container">
          {pioneerEffort.map((effort) => (
            <div className="pioneer-effort-block-con">
              <div className="pioneer-effort-block" key={effort.id}>
                <div className="pioneer-effort-block-img-container">
                  <img src={effort.img} alt="" />
                </div>
                <div className="pioneer-effort-block-text-container">
                  <span>{effort.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
