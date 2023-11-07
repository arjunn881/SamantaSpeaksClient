import React, { useEffect, useState } from "react";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const tableDataDns = [
//     {
//         id:1,
//         date:"14.12.2021",
//         DebateName:"Demand to minister consider sharing 60 percent of clean energey cess as demanded by state govt amounting to rs. 30,000 crore",
//         DebateType:"Special Mention"
//     },
//     {
//         id:1,
//         date:"14.12.2021",
//         DebateName:"Demand to minister consider sharing 60 percent of clean energey cess as demanded by state govt amounting to rs. 30,000 crore",
//         DebateType:"Special Mention"
//     },
// ]

export const DNS = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/debateSpeak";

  const [tableDataDns, setTableDataDns] = useState([]);

  console.log(tableDataDns);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTableDataDns(rev);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="tns">
      <div className="tns-left">
        <Subidebarc />
      </div>

      <div className="tns-right">
        <div className="tns-heading">
          <span>Debate & Speaks</span>
        </div>
        <div className="qop-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Debate title/Bill name </th>
              <th>Debate Type</th>
            </tr>

            {!tableDataDns ? (
              <Loader />
            ) : (
              <>
                {tableDataDns?.map((data) => (
                  <tr key={data?._id}>
                    <td>{data?.date}</td>
                    <td>{data?.DebateName}</td>
                    <td>{data?.DebateType}</td>
                  </tr>
                ))}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
