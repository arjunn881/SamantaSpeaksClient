import React, { useEffect, useState } from "react";
import "../International Visit/InternationalVisit.css";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../sidebar/Sidebar";

// import Samanta from "../../asset/International Visit/Samanta.png";

// const visits = [
//   {
//     id: 1,
//     img: Samanta,
//     title: "Always proud to promote my #Odishaaah..",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
//   {
//     id: 2,
//     img: Samanta,
//     title: "Always proud to promote my #Odishaaah..",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },

//   {
//     id: 3,
//     img: Samanta,
//     title: "Always proud to promote my #Odishaaah..",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
//   {
//     id: 4,
//     img: Samanta,
//     title: "Always proud to promote my #Odishaaah..",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
// ];

export const InternationalVisit = () => {
  const url = "https://samanata-speaks-server.onrender.com/api/internationalVisit";

  const location = useLocation();

  const [intVisit, setIntVisit] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(url);
        const rev = res.data.reverse() ;

        setIntVisit(rev);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <div className="international-visit">
          <div className="msgff-heading">
            <span className="heading2">INTERNATIONAL VISITS</span>
          </div>

          <div className="internatinal-visit-slider-container">
            {!intVisit ? (
              <Loader />
            ) : (
              intVisit?.map((visit) => (
                <div className="internatinal-visit-slider" key={visit?._id}>
                  <div className="slider-img-container">
                    <img src={visit?.img} alt="" />
                  </div>
                  <div className="slider-text-container">
                    <span>{visit?.title}</span>
                    <p>{visit?.desc}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="left">
            <Sidebar />
          </div>

          <div className="right">
            <div className="international-visit">
              <div className="msgff-heading">
                <span className="heading2">INTERNATIONAL VISITS</span>
              </div>

              <div className="internatinal-visit-page">
                {!intVisit ? (
                  <Loader />
                ) : (
                  intVisit?.map((visit) => (
                    <div className="internatinal-visit-slider" key={visit?._id}>
                      <div className="slider-img-container">
                        <img src={visit?.img} alt="" />
                      </div>
                      <div className="slider-text-container">
                        <span>{visit?.title}</span>
                        <p>{visit?.desc}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
