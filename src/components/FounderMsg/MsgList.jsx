import React from "react";
import Vector from "../../asset/Vector.png";
import { Link} from "react-router-dom";

export const MsgList = ({ msgs }) => {



  

  return (
    <div className="msgff-text-container">
      
        <div className="msgff-msg-text">
        <div className="msg-text-div">
          <div className="msg-text-icon">
            <img src={Vector} alt="" />
          </div>
          <div className="msg-text-date">
            <span>{new Date(msgs?.createdAt).toDateString()}</span>
            <p>{msgs?.message}</p>
          </div>
        </div>
        <div className="msg-text-seemore">
          <Link to={`/messages/${msgs?._id}`}>
            <span>See More </span>
          </Link>
        </div>
      </div>
      
    </div>
  );
};
