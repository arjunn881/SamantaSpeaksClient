import React from "react";
import './Div1.css';

export const Div1 = () => {
  return (
    <div className="anr-div1">
      <p className="anr-div1-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="anr-div1-block-container">
        <div className="anr-div1-left">
          <div className="anr-div1-block-img-container">
            <img src="" alt="" />
          </div>
          <div className="anr-div1-block-text-container">
            <span>Award Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
        </div>
        <div className="anr-div1-right">
          <div className="anr-div1-block-img-container">
            <img src="" alt="" />
          </div>
          <div className="anr-div1-block-text-container">
            <span>Award Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
