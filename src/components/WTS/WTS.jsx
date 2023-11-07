import React from "react";
import "../WTS/WTS.css";
import RocketBoy from "../../asset/WTS/1.png";
import { Link } from "react-router-dom";

export const WTS = () => {
  return (
    <div className="wts">
      <div className="msgff-heading">
        <span>What</span>
        <span className="heading2">STALWARTS</span>
        <span> Say’s</span>
      </div>
      <div className="wts-container">
        <div className="wts-left">
          <div className="wts-left-img-container">
            <img src={RocketBoy} alt="" />
          </div>
          <div className="wts-left-text-container">
            <span className="wts-left-span1-container">
              Dr. A P J Abdul Kalam
            </span>
            <span className="wts-left-span2-container">
              Former President of India
            </span>
          </div>
        </div>
        <div className="wts-right">
          <p>
            I congratulate Dr. Samanta for establishing institutions of
            character like KIIT and KISS. I urge the students of KIIT & KISS to
            take lead in spreading the message of peace and non-violence in
            present day strife torn world.
          </p>
        </div>
      </div>

      <Link to="/testimonial">
        <div className="wts-btn">
          <button>View All</button>
        </div>
      </Link>
    </div>
  );
};
