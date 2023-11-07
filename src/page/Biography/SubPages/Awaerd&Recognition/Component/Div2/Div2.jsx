import React, { useEffect, useState } from "react";
import "./Div2.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

// const award = [
//   {
//     id: 1,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 4,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },

//   {
//     id: 5,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },

//   {
//     id: 6,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },

//   {
//     id: 7,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },

//   {
//     id: 8,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },

//   {
//     id: 9,
//     img: "",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

export const Div2 = () => {
  const baseUrl = "https://samanata-speaks-server.onrender.com/api/awards";

  const [awards, setAwards] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);

        setAwards(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="anr-div2">
      <span>Awards</span>
      <div className="anr-div2-block-container">
        {awards?.map((award) => (
          <div className="anr-div2-block" key={award?._id}>
            <div className="anr-div2-block-img-container">
              <img src={award?.img} alt="" />
            </div>
            <div className="anr-div2-block-text-container">
              <p>{award?.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <NavLink to="/award" className="msgff-view">
        <span>View All</span>
        <i class="fa-solid fa-arrow-right"></i>
      </NavLink>
    </div>
  );
};
