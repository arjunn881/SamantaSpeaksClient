import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { Loader } from "../Loader/Loader";

export const NewsDetails = () => {
  const location = useLocation();

  console.log(location);

  const path = location.pathname.split("/")[2];

  const [news, setNews] = useState({});

  useEffect(() => {
    try {
      const getMsg = async () => {
        const res = await axios.get(
          "https://samanata-speaks-server.onrender.com/api/news/" + path
        );

        setNews(res.data);
      };

      getMsg();
    } catch (error) {
      console.log(error);
    }
  }, [path]);

  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="founder-msg-container">
          <div className="msgff-view">
            <span>News</span>
          </div>
          {!news ? (
            <Loader/>
          ) : (
            <div className="artcle-details-container">
              <div className="article-img">
                <img src={news?.img} alt="" />
              </div>

                <div className="article-text">
                  <span className="articleDetail-title">{news?.title}</span>
                  <span className="articleDetail-date">{new Date(news?.createdAt).toDateString()}</span>
                  <p className="articleDetail-desc">{news?.desc}</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

