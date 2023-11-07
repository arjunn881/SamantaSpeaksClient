import React, { useEffect, useState } from 'react'
import { Subidebarb } from '../../../../components/sidebar/MPOFKM/Sidebar'
import { Loader } from '../../../../components/Loader/Loader';
import axios from 'axios';

export const AllMPReports = () => {


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
    <>

<div className="home">
      <div className="left">
      <Subidebarb />
      </div>

      <div className="right">
        <div className="founder-msg-container">
          <div className="msgff-view">
            <span>Article</span>
          </div>

          {!reports? (
            <Loader/>
          ) : (
            <div className="mp-report-grid">
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
            </div>
          )}
        </div>
      </div>
    </div>
    
    </>
  )
}
