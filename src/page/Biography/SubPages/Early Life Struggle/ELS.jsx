import React from "react";
import "./ELS.css";
import { Subidebara } from "../../../../components/sidebar/Biography/Subsidebar";
import { Div1 } from "../../Component/Div1/Div1";

export const ELS = () => {
  return (
    <div className="els">
      <div className="els-left">
        <Subidebara />
      </div>

      <div className="els-right">
        <Div1 />
        <div className="els-right-video-container">
          <div className="msgff-heading">
            <span className="heading1">Watch the video about his {"  "} </span>
            <span className="heading2">EARLY LIFE</span>
          </div>
          <div className="els-right-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7ok2cMYHXYA?si=pROTZUqLm6wdBKLi&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
