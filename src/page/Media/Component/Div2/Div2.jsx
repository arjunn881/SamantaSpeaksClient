import React from "react";
import "./Div2.css";

const News = [
  {
    id: 1,
    img: "",
  },
  {
    id: 2,
    img: "",
  },
  {
    id: 3,
    img: "",
  },
  {
    id: 4,
    img: "",
  },
  {
    id: 5,
    img: "",
  },
];
export const Div2 = () => {
  return (
    <div className="media-div2">
      <div className="tns-heading">
        <span>News</span>
      </div>
      <div className="media-div2-block-container">
        {News.map((news) => (
          <div className="media-div2-block" key={news.id}>
            <div className="media-div2-block-img-container">
              <img src={news.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
