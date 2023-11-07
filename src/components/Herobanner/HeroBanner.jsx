import React from "react";
import "../Herobanner/HeroBanner.css";
// import Herobanner from "../../asset/Herobanner.png";
import SamantaSpeak from "../../asset/SamantaSpeaks.gif";
// import SamantaSpeaks from "../../asset/Samanta Speaks.mp4";

export const HeroBanner = () => {
  return (
    <>
      <div className="herobanner">
        <img src={SamantaSpeak} alt="asd" />
        {/* <video src={SamantaSpeaks} autoPlay={true} loop /> */}
      </div>
    </>
  );
};
