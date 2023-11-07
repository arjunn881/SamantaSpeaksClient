import React, { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import './msg.css';
import { useLocation } from "react-router-dom";
import axios from "axios";

export const MsgDetails = () => {

  const location = useLocation();

 

  const path = location.pathname.split("/")[2];

  const [msg, setMsg] = useState({});


  useEffect(()=>{
    try {
      const getMsg = async ()=>{
        const res = await axios.get("https://samanata-speaks-server.onrender.com/api/messages/"+ path);
        console.log(res.data);
  
        setMsg(res.data);
        
      } 
  
      getMsg();
    } catch (error) {
      console.log(error)
    }
  },[path])


  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="founder-msg-container">
          <div className="msgff-view">
            <span>Message</span>
          </div>

          <div className="msg-details-container">
            <p>{msg?.message}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
