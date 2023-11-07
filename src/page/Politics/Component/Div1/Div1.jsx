import React, { useEffect, useState } from "react";
import "./Div1.css";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

// const politics = [
//   {
//     id: 1,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 2,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 3,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 4,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 5,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 6,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 7,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 8,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 9,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 10,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },

//   {
//     id: 11,
//     img: "",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];



export const Div1 = () => {

  const baseUrl = "https://samanata-speaks-server.onrender.com/api/politics";


  const [politics, setPolitics] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(baseUrl);
        const rev = res.data.reverse() ;
        setPolitics(rev);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="politics-div1">
      <div className="politics-div1-img-container">
        <img src="" alt="" />
      </div>
      {
          !politics? (<Loader/>):(      <div className="politics-div1-slide-container">
        {politics?.map((politics) => (
          <div className="politics-div1-slide-block" key={politics?._id}>
            <div className="politics-div1-block-img-container">
              <img src={politics?.img} alt="" />
            </div>

            <div className="politics-div1-block-text-container">
              <p>{politics?.desc}</p>
            </div>
          </div>
        ))}
      </div>)
      }

    </div>
  );
};
