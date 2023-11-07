import React from "react";
import './Loader.css';

import Img from "../../asset/Loader/Loader.gif";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={Img} alt="loader" />
    </div>
  );
};
