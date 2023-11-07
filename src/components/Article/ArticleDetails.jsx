import React, { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import "./Articles.css"



export const ArticleDetails = () => {
  const location = useLocation();

  console.log(location);

  const path = location.pathname.split("/")[2];

  const [article, setArticle] = useState({});

  useEffect(() => {
    try {
      const getMsg = async () => {
        const res = await axios.get(
          "https://samanata-speaks-server.onrender.com/api/articles/" + path
        );
  
  
        setArticle(res.data);
  
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
            <span>Article</span>
          </div>

          {!article ? (
            <Loader/>
          ) : (
            <div className="artcle-details-container">
              <div className="article-img">
                <img src={article?.img} alt="" />
              </div>

                <div className="article-text">
                  <span className="articleDetail-title">{article?.title}</span>
                  <span className="articleDetail-date">{new Date(article?.createdAt).toDateString()}</span>
                  <p className="articleDetail-desc">{article?.desc}</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
