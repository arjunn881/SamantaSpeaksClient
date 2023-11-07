import React, { useEffect } from "react";
import "./Div1.css";
import Earlier from "../../../../asset/Biography/Div1/Earlier.png";
import Now from "../../../../asset/Biography/Div1/Now.png";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

export const Div1 = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="div1">
      <div className="div1-top">
        <div className="div1-left">
          <div className="div1-img-container" data-aos="zoom-in">
            <img src={Earlier} alt="" />
          </div>
        </div>
        <div className="div1-right">
          {location.pathname === "/biography" ? (
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 5,
                  strings: "Life Story of Prof. Achyuta Samanta",
                }}
              ></Typewriter>
            </span>
          ) : (
            ""
          )}

          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
                strings:
                  "Prof Achyuta Samanta’s life story reads like a powerful saga of grit, determination, and social responsibility. Born and brought up in poverty in a remote village in Odisha, he was dealt a cruel blow at the tender age of four when he lost his father, after which his life became a struggle for food and education for 15 long years. However, he persevered, and at the age of 22, joined teaching. At 25, he embarked on a journey that would change his own life, and the lives of thousands of people. With just Rs 5000 in his pocket, he started KIIT (Kalinga Institute of Industrial Technology) and KISS (Kalinga Institute of Social Sciences) in two rented houses.",
              }}
            ></Typewriter>
          </p>
        </div>
      </div>
      <div className="div1-bottom">
        <div className="div1-left">
          {location.pathname === "/biography" ? (
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 5,
                  strings: "Educationist, humanitarian and a statesman",
                }}
              ></Typewriter>
            </span>
          ) : (
            ""
          )}

          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
                strings:
                  "Prof. Achyuta Samanta is an educationist, humanitarian and a statesman. He grew up in Kalarabanka, Odisha amidst severe poverty with seven siblings and a widow mother. He managed to complete his Masters, struggling and braving the hardships from the age of four when he lost his father in a train accident.    The small industry training institution grew into a University in 2004, known by its acronym, KIIT, Kalinga Institute of Industrial Technology. In the same year, he also founded Kalinga Institute of Social Sciences (KISS) for providing education to the indigenous boys and girls, free of cost. 'Positivity is the best way to sustainable success'",
              }}
            ></Typewriter>
          </p>
        </div>
        <div className="div1-right">
          <div className="div1-img-container" data-aos="zoom-in">
            <img src={Now} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
