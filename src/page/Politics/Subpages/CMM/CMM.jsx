import React, { useEffect, useState } from "react";
import { Subidebarc } from "../../../../components/sidebar/Politics/Subsidebar";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const tableDataCmm = [
//     {
//         id:1,
//         sno:1,
//         ParliamentaryCommittee:"Joint Committee on the Biological Diversity (Amendment) Bill, 2021",
//         Status:"Member",
//         DateFrom :"20-12-2021"
//     },
//     {
//         id:1,
//         sno:1,
//         ParliamentaryCommittee:"Joint Committee on the Biological Diversity (Amendment) Bill, 2021",
//         Status:"Member",
//         DateFrom :"20-12-2021"
//     },
//     {
//         id:1,
//         sno:1,
//         ParliamentaryCommittee:"Joint Committee on the Biological Diversity (Amendment) Bill, 2021",
//         Status:"Member",
//         DateFrom :"20-12-2021"
//     },

//     {
//         id:1,
//         sno:1,
//         ParliamentaryCommittee:"Joint Committee on the Biological Diversity (Amendment) Bill, 2021",
//         Status:"Member",
//         DateFrom :"20-12-2021"
//     },

//     {
//         id:1,
//         sno:1,
//         ParliamentaryCommittee:"Joint Committee on the Biological Diversity (Amendment) Bill, 2021",
//         Status:"Member",
//         DateFrom :"20-12-2021"
//     },
// ]

export const CMM = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/committeeMembership";

  const [tableDataCmm, setTableDataCmm] = useState([]);

  console.log(tableDataCmm);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setTableDataCmm(rev);
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
          <span>Committee Membership</span>
        </div>

        <div className="qop-table">
          <table>
            <tr>
              <th>S.No</th>
              <th>Parliamentary Committee </th>
              <th>Status</th>
              <th>Date From</th>
            </tr>

            {!tableDataCmm ? (
              <Loader />
            ) : (
              <>
                {tableDataCmm?.map((data, index) => (
                  <tr key={data?._id}>
                    <td>{index + 1}</td>
                    <td>{data?.ParliamentaryCommittee}</td>
                    <td>{data?.Status}</td>
                    <td>{new Date(data?.date).toDateString()}</td>
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
