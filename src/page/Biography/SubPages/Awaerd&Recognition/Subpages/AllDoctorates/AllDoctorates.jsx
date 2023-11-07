import React, { useEffect, useState } from "react";
import { Subidebara } from "../../../../../../components/sidebar/Biography/Subsidebar";
import { NavLink } from "react-router-dom";
import "./AllDoctorates.css";
import axios from "axios";

// const university = [
//   {
//     id: 1,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
//   {
//     id: 2,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
//   {
//     id: 3,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
//   {
//     id: 4,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
//   {
//     id: 5,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
//   {
//     id: 6,
//     img: "",
//     name: "University Name",
//     year: 2013,
//   },
// ];

export const AllDoctorates = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/doctorates";

  const [doctorates, setDoctorates] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);

        setDoctorates(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="award">
      <div className="award-left">
        <Subidebara />
      </div>

      <div className="award-right">
        <span className="awards-span">All Doctorates</span>

        <div className="asb-div1-top">
          <div className="asb-div1-right">
            <p>
              The life and work of Prof. Samanta has been the subject of a
              number of films, documentaries, television series, talk shows,
              advocacy and awareness films, magazines and news items of all
              leading print and electronic media worldwide. His contribution has
              been recognised through several prestigious national and
              international awards. Some of these include:
            </p>
          </div>

          <div className="asb-div1-left">
            <div className="asb-div1-img-container">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="anr-degree-container">
            <div className="anr-degree-university-name-left">
              {doctorates?.map((data) =>
                data?._id % 2 !== 0 ? (
                  <div className="anr-degree-university-name" key={data?._id}>
                    <div className="anr-degree-img-container">
                      <img src="" alt="" />
                    </div>

                    <div className="anr-degree-text-container">
                      <span className="anr-degree-text-container-span">
                        {data?.name}
                      </span>
                      <span>{data?.year}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>

            <div className="anr-degree-university-name-right">
              {doctorates.map((data) =>
                data?._id % 2 === 0 ? (
                  <div className="anr-degree-university-name" key={data?._id}>
                    <div className="anr-degree-img-container">
                      <img src="" alt="" />
                    </div>

                    <div className="anr-degree-text-container">
                      <span className="anr-degree-text-container-span">
                        {data?.name}
                      </span>
                      <span>{data?.year}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>

        <div className="awards-btn">
          <NavLink to="/award">
            <button className="awards-btn-green">View all AWARDS</button>
          </NavLink>

          <NavLink to="/memberships">
            <button className="awards-btn-black">All Memberships</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
