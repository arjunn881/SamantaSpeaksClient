import React from "react";
import Samanta from '../../../../asset/Samanta.png'
import '../Div4/Div4.css';
import {Link} from "react-router-dom";



export const Div4 = () => {
  return (
    <section className="know-more">
      <div className="know-more-img-container">
        <img src={Samanta} alt="" />
      </div>

      <div className="know-more-text-container">
        <span>Know more about him </span>
        <p>
          Prof. Achyuta Samanta is an educationist, humanitarian and a
          statesman. He grew up in Kalarabanka, Odisha amidst severe poverty
          with seven siblings and a widow mother.
        </p>


        
          
        <div className="biography-div4-btn">
          
        <Link to="/books">
          Read Book
          </Link>  
          </div>
                
      </div>
    </section>
  );
};
