import React, { useEffect, useState } from "react";
import "./Awards.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';

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


export const Awards = () => {

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
    <div className="awards-div2">
      <span className="awards-span">Awards & Recognition</span>
      <div className="awards-div2-block-container">
        {awards?.map((award) => (
          <div className="awards-div2-block" key={award?._id}>
            <div className="awards-div2-block-img-container">
              <img src={award?.img} alt="" />
            </div>
            <div className="awards-div2-block-text-container">
              <p>{award?.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="awards-btn">
        <NavLink to="/doctorates">
          <button className="awards-btn-green">View all DOCTORATE</button>
        </NavLink>

        <NavLink to="/memberships">
          <button className="awards-btn-black">All Memberships</button>
        </NavLink>
      </div>
    </div>
  );
};
