import React, { useEffect, useState } from "react";

import { Sidebar } from "../sidebar/Sidebar";
import Vector from "../../asset/Vector.png";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { MsgList } from "./MsgList";

const AllMsg = () => {

const baseUrl = "https://samanata-speaks-server.onrender.com/api/messages"

  const location = useLocation(); 
  const [msglist, setMsglist] = useState([]);

  useEffect(() => {
    const getMsglist = async () => {
      const res = await axios.get(baseUrl);
      const rev = res.data.reverse()
      setMsglist(rev);
      
    };
    getMsglist();
  }, []);





  

  return (

    <>  
      {
        location.pathname !== "/" ? (
          <div className="home">
          <div className="left">
            <Sidebar />
          </div>
    
          <div className="right">
            {!msglist? <Loader/> : msglist.map((msgs) => (
              <div className="">
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
            ))}
          </div>
        </div>
        ):(
          <div className="home-msg-container">
          {!msglist ? <Loader /> : msglist?.slice(0, 3).map((m) => <MsgList msgs={m} key={m?._id} />)}
    
          <Link to="/messages" className="msgff-view">
            <span>View All</span>
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        )
      }
    </>

  );
};

export default AllMsg;
