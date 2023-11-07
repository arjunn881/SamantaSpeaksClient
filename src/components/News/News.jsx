import React, { useEffect, useState } from "react";
import "../News/News.css";
import { Loader } from "../Loader/Loader";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import axios from "axios";
// import a1 from "../../asset/News/1.jpg";
// import a2 from "../../asset/News/2.png";
// import a3 from "../../asset/News/3.png";
// import a4 from "../../asset/News/4.png";
// import a5 from "../../asset/News/5.png";
// import a6 from "../../asset/News/6.png";

// const news = [
//   {
//     id: 1,
//     img: a1,
//     heading: "Samanta Conferred with 50th Honorary Doctorate Degree",
//     date: "25th  Dec, 2022",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 2,
//     img: a2,
//     heading: "Rashtriya Khel Protsahan Puruskar 2022",
//     date: "1st Dec, 2022",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 3,
//     img: a3,
//     heading: "Honorary Doctorate Degree from BGU",
//     date: "29 Nov, 2022",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 4,
//     img: a4,
//     heading: "Popularising Volleyball at Manila Meet",
//     date: "17 Feb, 2023",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 5,
//     img: a5,
//     heading: "“Ananya Samman” for social work",
//     date: "17 Feb, 2023",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 6,
//     img: a6,
//     heading: "69th Senior National Volleyball (M&W) Championship at KIIT",
//     date: "17 Feb, 2023",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];

export const News = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/news";
  const location = useLocation();

  const [news, setNews] = useState([]);

  useEffect(() => {
      try {
        const getNews = async () => {
          const res = await axios.get(baseUrl);
          const rev = res.data.reverse() ;
      
          setNews(rev);
        };
        getNews();
      } catch (error) {
        console.log(error)
      }
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <div className="news">
          <div className="msgff-heading">
            <span className="heading2">NEWS</span>
          </div>
          <div className="news-container">
            {!news ? (
              <Loader />
            ) : (
              news?.map((news) => (
                <div className="grid-article-block" key={news?._id}>
                  <Link to={`/news/${news?._id}`}>
                  <div className="news-block">
                    <div className="news-img-container">
                      <img src={news?.img} alt={news?._id} />
                      <div className="hover2">
                        <div className="share-con">
                          <i class="fa-solid fa-share"></i>
                        </div>
                      </div>
                    </div>

                    <div className="news-text-container">
                      <span>{news?.title}</span>
                      <span>{new Date(news?.createdAt).toDateString()}</span>
                      <p>{news?.desc}</p>
                    </div>
                  </div>
                  </Link>
                  
                </div>
              ))
            )}
          </div>
          <Link to="/news">
          <div className="msgff-view">
            <span>View All</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          </Link>
        </div>
      ) : (
        <div className="home">
          <div className="left">
            <Sidebar />
          </div>

          <div className="right">
            <div className="news">
              <div className="msgff-heading">
                <span className="heading2">NEWS</span>
              </div>
              <div className="news-container">
                {!news ? (
                  <Loader />
                ) : (
                  news?.slice(0, 3).map((news) => (
                    <div className="grid-article-block" key={news?._id}>
                      <Link to={`/news/${news?._id}`}>
                      <div className="news-block">
                        <div className="news-img-container">
                          <img src={news?.img} alt={news?._id} />
                          <div className="hover2">
                            <div className="share-con">
                              <i class="fa-solid fa-share"></i>
                            </div>
                          </div>
                        </div>

                        <div className="news-text-container">
                          <span>{news?.title}</span>
                          <span>
                            {new Date(news?.createdAt).toDateString()}
                          </span>
                          <p>{news?.desc}</p>
                        </div>
                      </div>
                      </Link>
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
