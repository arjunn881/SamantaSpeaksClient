import React from "react";
import "../YT/YT.css";

export const YouTube = () => {
  return (
    <div className="yt">
      <div className="els-right-video">
        
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sAy19O--OZg?si=iIIgTGy6jHIn5FaR&amp;start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        
      </div>
    </div>
  );
};
