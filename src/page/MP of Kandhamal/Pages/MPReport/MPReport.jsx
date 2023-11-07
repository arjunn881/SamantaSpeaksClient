import React, { useEffect, useState } from "react";
import { Subidebarb } from "../../../../components/sidebar/MPOFKM/Sidebar";
import "./MPReport.css";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";
import { Link } from "react-router-dom";

// const reports = [
//   {
//     id:1,
//     img:"",
//     title:"MP Performance Report Apr-Jun 2022",

//   },
//   {
//     id:2,
//     img:"",
//     title:"MP Performance Report Jan-Mar 2022",

//   },
//   {
//     id:3,
//     img:"",
//     title:"MP Performance Report Oct-Dec 2021",

//   },

//   {
//     id:4,
//     img:"",
//     title:"MP Performance Report Jul-Sep 2021",

//   },

//   {
//     id:5,
//     img:"",
//     title:"MP Performance Report Apr-Jun 2021",

//   },
//   {
//     id:6,
//     img:"",
//     title:"MP Performance Report Jan-Mar 2021",

//   },

//   {
//     id:7,
//     img:"",
//     title:"MP Performance Report Jul-Dec 2020",

//   },

//   {
//     id:8,
//     img:"",
//     title:"MP Performance Report Apr-Jun 2020",

//   },

//   {
//     id:9,
//     img:"",
//     title:"MP Performance Report Jan-Mar 2020",

//   },

// ]

export const MPReport = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/report";

  const [reports, setReports] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);

        setReports(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="tns">
      <div className="tns-left">
        <Subidebarb />
      </div>

      <div className="tns-right">
        <div className="tns-heading">
          <span>MP Reports</span>
        </div>

        <div className="mp-report-grid">
          {!reports ? (
            <Loader />
          ) : (
            <>
              {reports?.map((report) => (
                 <a href={report?.file} download key={report?._id}>
                <div className="mp-report-block">
                  <div className="mp-report-block-img">
                    <img src={report?.img} alt={report?._id} />
                  </div>
                  <div className="mp-report-block-text">
                    <span>{report?.name}</span>
                  </div>
                </div>
                </a>
              ))}
            </>
          )}
        </div>

        <div className="mp-report-load">
          <Link to="/allmpreports">
          <span>Load more posts</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
