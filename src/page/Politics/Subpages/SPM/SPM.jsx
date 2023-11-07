import React, { useEffect, useState } from "react";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const tableData = [
//   {
//     id: 1,
//     date: "5/02/20",
//     title: "Need to release pending funds of states under MGNREGS.",
//   },

//   {
//     id: 1,
//     date: "5/02/20",
//     title: "Need to release pending funds of states under MGNREGS.",
//   },

//   {
//     id: 1,
//     date: "5/02/20",
//     title: "Need to release pending funds of states under MGNREGS.",
//   },

//   {
//     id: 1,
//     date: "5/02/20",
//     title: "Need to release pending funds of states under MGNREGS.",
//   },
//   {
//     id: 1,
//     date: "5/02/20",
//     title: "Need to release pending funds of states under MGNREGS.",
//   },
// ];

export const SPM = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/specialMention";

  const [tableData, setTableData] = useState([]);

  console.log(tableData);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);

        setTableData(res.data);
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
          <span>Special Mentions</span>
        </div>

        <div className="qop-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Title</th>
            </tr>

            {!tableData ? (
              <Loader />
            ) : (
              <>
                {tableData?.map((data) => (
                  <tr key={data?._id}>
                    <td>{data?.date}</td>
                    <td>{data?.title}</td>
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
