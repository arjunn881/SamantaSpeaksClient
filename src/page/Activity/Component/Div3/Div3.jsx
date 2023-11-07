import React from "react";
import "./Div3.css";

import A from "../../../../asset/Activity/9.png";
import B from "../../../../asset/Activity/10.png";
import C from "../../../../asset/Activity/11.png";
import D from "../../../../asset/Activity/12.png";

export const Div3 = () => {
  return (
    <div className="activity-div3">
      <div className="activity-div-block-container">
        <div className="activity-div3-left">
          <div className="activity-div3-img-container">
            <img src={A} alt="" />
          </div>
          <div className="activity-div3-text-container">
            <span>Rural Development</span>
            <p>
              Development of Kalarabanka, Prof. Samanta’s native village, to
              smart Village
            </p>
          </div>
        </div>
        <div className="activity-div3-right">
          <div className="activity-div3-img-container">
            <img src={B} alt="" />
          </div>
          <div className="activity-div3-text-container">
            <span>Rural Development</span>
            <p>
              Development of Kalarabanka, Prof. Samanta’s native village, to
              smart Village
            </p>
          </div>
        </div>
      </div>
      <div className="activity-div-block-container">
        <div className="activity-div3-left">
          <div className="activity-div3-img-container">
            <img src={C} alt="" />
          </div>
          <div className="activity-div3-text-container">
            <span>Rural Development</span>
            <p>
              Development of Kalarabanka, Prof. Samanta’s native village, to
              smart Village
            </p>
          </div>
        </div>

        <div className="activity-div3-right">
          <div className="activity-div3-img-container">
            <img src={D} alt="" />
          </div>
          <div className="activity-div3-text-container">
            <span>Rural Development</span>
            <p>
              Development of Kalarabanka, Prof. Samanta’s native village, to
              smart Village
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
