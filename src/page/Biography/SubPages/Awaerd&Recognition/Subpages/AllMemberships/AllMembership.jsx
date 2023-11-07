import React, { useEffect, useState } from "react";
import { Subidebara } from "../../../../../../components/sidebar/Biography/Subsidebar";
import { NavLink } from "react-router-dom";
import "./AllMembership.css";
import axios from "axios";

// const Membership = [
//   {
//     id: 1,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },

//   {
//     id: 2,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },

//   {
//     id: 3,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },

//   {
//     id: 4,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },

//   {
//     id: 5,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },

//   {
//     id: 6,
//     img: "",
//     desc: "President, Volleyball Federation of India",
//   },
// ];

export const AllMembership = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/memberships";

  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);

        setMemberships(res.data);
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
        <span className="awards-span">Membership</span>

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

        <div className="anr-degree-container">
          <div className="anr-degree-university-name-left">
            {memberships?.map((data) =>
              data?._id % 2 !== 0 ? (
                <div className="anr-degree-university-name" key={data?._id}>
                  <div className="anr-degree-img-container">
                    <img src="" alt="" />
                  </div>

                  <div className="anr-degree-text-container">
                    <span className="anr-degree-text-container-span">
                      {data?.desc}
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className="anr-degree-university-name-right">
            {memberships.map((data) =>
              data?._id % 2 === 0 ? (
                <div className="anr-degree-university-name" key={data?._id}>
                  <div className="anr-degree-img-container">
                    <img src="" alt="" />
                  </div>

                  <div className="anr-degree-text-container">
                    <span className="anr-degree-text-container-span">
                      {data?.desc}
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>

        <div className="awards-btn">
          <NavLink to="/doctorates">
            <button className="awards-btn-green">View all DOCTORATE</button>
          </NavLink>

          <NavLink to="/award">
            <button className="awards-btn-black">All AWARDS</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
