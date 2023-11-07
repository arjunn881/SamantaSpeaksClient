import React from "react";
import { MsgList } from "./MsgList";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const Msgs = ({ msg }) => {
  return (
    <div className="home-msg-container">
      {!msg ? <Loader /> : msg?.map((m) => <MsgList msgs={m} key={m?._id} />)}

      <Link to="/messages" className="msgff-view">
        <span>View All</span>
        <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};
