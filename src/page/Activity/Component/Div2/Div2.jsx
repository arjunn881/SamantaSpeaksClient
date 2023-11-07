import React from "react";
import './Div2.css';
import A from '../../../../asset/Activity/1.png';
import B from '../../../../asset/Activity/2.png';
import C from '../../../../asset/Activity/3.png';
import D from '../../../../asset/Activity/4.png';
import E from '../../../../asset/Activity/5.png';
import F from '../../../../asset/Activity/6.png';
import G from '../../../../asset/Activity/7.png';
import H from '../../../../asset/Activity/8.png';


const activity = [
  {
    id: 1,
    img: A,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 2,
    img: B,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 3,
    img: C,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 4,
    img: D,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 5,
    img: E,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 6,
    img: F,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 7,
    img: G,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
  {
    id: 8,
    img: H,
    title: "Art of Giving",
    desc: "A philosophy of life to promote peace and happiness in society",
  },
];
export const Div2 = () => {

    


  return (
    <div className="activity-div2">
      <div className="activity-div2-block-container">
        {activity.map((activity) => (
          <div className="activity-div2-block" key={activity.id}>
            <div className="activity-div2-block-img-container">
              <img src={activity.img} alt="" />
            </div>
            <div className="activity-div2-text">
              <span>{activity.title}</span>
              <p>{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
