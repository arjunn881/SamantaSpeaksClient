import React, { useEffect, useState } from "react";
import "./QOP.css";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";
// const tableDataQop = [
//   {
//     id: 1,
//     sno: 103,
//     qno: 2566,
//     date: "UNSTARRED",
//     qtype: "17.03.2022",
//     ministry: "CIVIL AVIATION",
//     subject: "Krishi UDAN 2.0 Scheme in Odisha",
//   },
//   {
//     id: 2,
//     sno: "",
//     qno: "",
//     date: "",
//     qtype: "",
//     ministry: "",
//     subject: "",
//   },
//   {
//     id: 2,
//     sno: "",
//     qno: "",
//     date: "",
//     qtype: "",
//     ministry: "",
//     subject: "",
//   },

//   {
//     id: 2,
//     sno: "",
//     qno: "",
//     date: "",
//     qtype: "",
//     ministry: "",
//     subject: "",
//   },

//   {
//     id: 2,
//     sno: "",
//     qno: "",
//     date: "",
//     qtype: "",
//     ministry: "",
//     subject: "",
//   },

//   {
//     id: 2,
//     sno: "",
//     qno: "",
//     date: "",
//     qtype: "",
//     ministry: "",
//     subject: "",
//   },
// ];

  

export const QOP = () => {

  const baseUrl = "https://samanata-speaks-server.onrender.com/api/parliamentQuestion";


  const [tableDataQop, setTableDataQop] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTableDataQop(rev);
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
          <span>Question on Parliament</span>
        </div>
        <div className="qop-table">
          <table>
            <tr>
              <th>Serial Number</th>
              <th>Q. NO.</th>
              <th>Date</th>
              <th>Q.Type</th>
              <th>Ministry</th>
              <th>Subject</th>
            </tr>

            {
              !tableDataQop? (<Loader/>) : (<>
                
                {tableDataQop?.map((data, index) => (
                  <tr key={data?._id}>
                    <td> {index+1}</td>
                    <td>{data?.qNo}</td>
                    <td>{data?.date}</td>
                    <td>{data?.qType}</td>
                    <td>{data?.ministry}</td>
                    <td>{data?.subject}</td>
                  </tr>
                ))}
                
                </>)
            }


          </table>
        </div>
      </div>
    </div>
  );
};
