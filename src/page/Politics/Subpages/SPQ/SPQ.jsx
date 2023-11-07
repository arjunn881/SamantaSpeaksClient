import React, { useEffect, useState } from "react";
import "./SPQ.css";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const tableDataSpq = [
//     {
//         id:1,
//         qno:221,
//         date:"14.12.2021",
//         sno:7,
//         ministryName:"RURAL DEVELOPMENT",
//         subject:"Rural development and Poverty Allevaition Scheme"
//     },
//     {
//         id:1,
//         qno:221,
//         date:"14.12.2021",
//         sno:7,
//         ministryName:"RURAL DEVELOPMENT",
//         subject:"Rural development and Poverty Allevaition Scheme"
//     },

//     {
//         id:1,
//         qno:221,
//         date:"14.12.2021",
//         sno:7,
//         ministryName:"RURAL DEVELOPMENT",
//         subject:"Rural development and Poverty Allevaition Scheme"
//     },

//     {
//         id:1,
//         qno:221,
//         date:"14.12.2021",
//         sno:7,
//         ministryName:"RURAL DEVELOPMENT",
//         subject:"Rural development and Poverty Allevaition Scheme"
//     },

//     {
//         id:1,
//         qno:221,
//         date:"14.12.2021",
//         sno:7,
//         ministryName:"RURAL DEVELOPMENT",
//         subject:"Rural development and Poverty Allevaition Scheme"
//     },
// ]

export const SPQ = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/supplementaryQuestion";

  const [tableDataSpq, setTableDataSpq] = useState([]);

 

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTableDataSpq(rev);
        
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
          <span>Supplementary Question</span>
        </div>

        <div className="qop-table">
          <table>
            <tr>
              <th>Q. NO.</th>
              <th>Date</th>
              <th>Session No</th>
              <th>Ministry Name</th>
              <th>Subject</th>
            </tr>

            {!tableDataSpq ? (
              <Loader />
            ) : (
              <>
                {tableDataSpq?.map((data, index) => (
                  <tr key={data?._id}>
                    <td>{index + 1}</td>
                    <td>{data?.date}</td>
                    <td>{data?.sessionNo}</td>
                    <td>{data?.ministryName}</td>
                    <td>{data?.subject}</td>
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
