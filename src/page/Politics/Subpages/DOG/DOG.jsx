import React, { useEffect, useState } from "react";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const tableDataDisog = [
//     {
//         id:1,
//         date:"19/2/2023",
//         TypeofDebate:"GOVERNMENT BILLS",
//         Title:"Motion for the consideration of the Arms (Amendment) Bill, 2019 (Motion adopted and Bill passed)."
//     },
//     {
//         id:1,
//         date:"19/2/2023",
//         TypeofDebate:"GOVERNMENT BILLS",
//         Title:"Motion for the consideration of the Arms (Amendment) Bill, 2019 (Motion adopted and Bill passed)."
//     },
// ]

export const DOG = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/discussionOnGovt";

  const [tableDataDisog, setTableDataDisog] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTableDataDisog(rev);
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
          <span>Discussion on Government</span>
        </div>
        <div className="qop-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Type of Debate</th>
              <th>Title</th>
            </tr>

            {!tableDataDisog ? (
              <Loader />
            ) : (
              <>
                {tableDataDisog?.map((data) => (
                  <tr key={data?._id}>
                    <td>{new Date(data?.date).toDateString}</td>
                    <td>{data?.debateType}</td>
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
