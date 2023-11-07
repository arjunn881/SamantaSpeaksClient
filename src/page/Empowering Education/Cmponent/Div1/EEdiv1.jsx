import React from "react";
import "./EEdiv1.css";
import Kiit from "../../../../asset/Kiit.png";
import Kiss from "../../../../asset/Kiss.png";

export const EEdiv1 = () => {
  return (
    <div className="eediv1">
      <div className="eediv-div1">
        <span>OVERVIEW</span>
        <p>
          Education transformed the life of Achyuta Samanta. He wanted millions
          of poor children to reap the benefit of the transformative power of
          Education. So, he made promoting empowerment through education the
          mission of his life. He created KIIT for he believed if he had money,
          he would be able to do something for the poor. Unlike most
          philanthropist who begin after they make it big, Achyuta Samanta
          started KISS simultaneously.
        </p>
      </div>

      <div className="eediv-div2">
        <span>“Poverty creates illiteracy. literacy eradicates poverty.”</span>
        <div className="eediv-div2-img-div">
          <div className="eediv-div2-img1-div">
            <img src="" alt="" />
          </div>
          <div className="eediv-div2-img2-div">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="eediv-div1">
        <span>SCALE</span>
        <p>
          Back in 1992-93, he changed the education landscape of Odisha by
          starting an Industrial Training Institute and gradually introducing
          professional courses. This stopped the huge exodus of students to
          neighbouring states. Academics, Infrastructure and student
          friendliness – 3 pillars of KIIT made it grow from strength to
          strength. He also delved into the realm of tribal education when
          Government also considered it a grey area and did not dare to
          intervene. He convinced the tribal parents to send their wards to
          study in the capital city of Odisha by promising them nutritious
          meals, comprehensive development, excellent teachers and residential
          facilities. Starting it was not easy, but Prof. Achyuta Samanta took
          up the task of introducing professional education in the private realm
          in Odisha on one hand and providing education to the tribal boys and
          girls on the other.
        </p>
        <p>
          He has also adopted many schools and educational institutions in
          India, Bangladesh, Nepal and Africa besides creating the avenue for
          education in his native village, Kalarabanka. As an educationist, he
          has been a member of various academic bodies like UGC and AICTE, India
          and honorary advisor to the state government of Manipur. His awareness
          campaign- Education for all is a flagship initiative to see that no
          child remains out of school.
        </p>
      </div>
      <div className="eediv-div2">
        <span>
          “KISS Becomes First Exclusive Tribal University In The World”
        </span>
      </div>

      <div className="eediv-div1">
        <span className="impact">IMPACT</span>
      </div>

      <div className="eediv-div2-img-div">
        <div className="eediv-div2-img1-div">
          <img src="" alt="" />
        </div>
        <div className="eediv-div2-text-div">
          <p>
            KIIT is one of the most sought after universities in India and KISS
            has become the template for tribal education and Empowerment. Odisha
            has gained a position of prominence in the education map of India
            with the exponential growth of KIIT and KISS.
          </p>
        </div>
      </div>

      <div className="eediv-div2">
        <span>“Positivity is the best way to sustainable success” </span>
      </div>

      <div className="eediv-prosterity">
        <div className="posterity-block">
          <div className="posterity-block-img-container">
            <img src={Kiit} alt="" />
            <div className="hover">
              <span>Visit Website</span>
              <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>

        <div className="posterity-block">
          <div className="posterity-block-img-container">
            <img src={Kiss} alt="" />
            <div className="hover">
              <span>Visit Website</span>
              <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
