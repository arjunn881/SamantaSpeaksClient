import React, { useEffect, useState } from "react";
import "./Testimonies.css";
import RocketBoy from "../../../asset/WTS/1.png";
import axios from "axios";

import { Loader } from "../../Loader/Loader";

export const Testimonies = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/testimony";


  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    try {
      const getNews = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTestimony(rev);
      };
      getNews();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="testimonies">
        <div className="testimony">
          <div className="msgff-heading">
            <span className="heading2">Testimonial</span>
          </div>

          <div className="testimony-heading">
            <span>What Stalwarts Say</span>
          </div>

          <div className="stalwart-container">
            <div className="stalwart-block">
              <span>Ploicy Maker</span>
              <div className="stalwart-block-img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div className="stalwart-block">
              <span>Internal Dignity</span>
              <div className="stalwart-block-img-container">
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className="stalwart-container">
            <div className="stalwart-block2">
              <span>Union Minister</span>
              <div className="stalwart-block-img-container">
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className="testimony-heading">
            <span>Testimonial</span>
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

          {!testimony ? (
            <Loader />
          ) : (
            <>
              {testimony?.map((testimony) => (
                <div className="wts-container" key={testimony?._id}>
                  <div className="wts-left">
                    <div className="wts-left-img-container">
                      <img src={RocketBoy} alt="" />
                    </div>
                    <div className="wts-left-text-container">
                      <span className="wts-left-span1-container">
                        {testimony?.title}
                      </span>
                      <span className="wts-left-span2-container">
                         {testimony?.title}
                      </span>
                    </div>
                  </div>
                  <div className="wts-right">
                    <p>
                      {testimony?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
