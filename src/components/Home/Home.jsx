import React from "react";
import "../Home/Home.css";
import Kiit from "../../asset/Kiit.png";
import Kiss from "../../asset/Kiss.png";
import Kims from "../../asset/Kims.png";
import { PioneerEffort } from "../PioneerEfforts/PioneerEffort";
import { News } from "../News/News";
import Samanta from "../../asset/Samanta.png";
import { InternationalVisit } from "../International Visit/InternationalVisit";
import { MPOffice } from "../MP Office/MPOffice";
import { WTS } from "../WTS/WTS";
import { YouTube } from "../YT/YT";
import { Social } from "../Social Media/Social";
import { Footer } from "../Footer/Footer";
import AllMsg from "../FounderMsg/AllMsg";
import { Articles } from "../Article/Articles";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-component">
      <div className="hero-banner-mobile">
        <img src={Samanta} alt="asd" />
      </div>
      <div className="msg-from-founder">
        <div className="msgff-heading">
          <span className="heading1">Message from {"  "} </span>
          <span className="heading2">FOUNDER</span>
        </div>
        <>
          <AllMsg />
        </>
      </div>

      <section className="posterity">
        <div className="msgff-heading">
          <span className="heading1">My {"  "} </span>
          <span className="heading2">Posterity</span>
        </div>

        <div className="posterity-container">
          <Link
            to="https://www.kiitonline.ac.in/"
            target="_blank"
            className="posterity-block"
          >
            <div>
              <div className="posterity-block-img-container">
                <img src={Kiit} alt="" />
                <div className="hover">
                  <span>Visit Website</span>
                  <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
              <div className="posterity-block-text-container">
                <span>KIIT UNIVERSITY</span>
                <p>
                  Kalinga Institute of Industrial Technology (KIIT), a household
                  name in the education sector, has become a sought-after
                  destination in India for professional studies. It is admired
                  all over for the quality of its academic courses, its
                  community outreach work and as a university of compassion and
                  humanitarianism. It has become a case study because no other
                  educational institution in India has grown in its scope and
                  scale as much as KIIT has in a short span of 25 years. Its
                  incredible transformation is truly a journey from Soil to
                  Silver.
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="https://kiss.ac.in/"
            target="_blank"
            className="posterity-block"
          >
            <div>
              <div className="posterity-block-img-container">
                <img src={Kiss} alt="" />
                <div className="hover">
                  <span>Visit Website</span>
                  <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
              <div className="posterity-block-text-container">
                <span>KISS FOUNDATION</span>
                <p>
                  In its course of inception, evolution and existence, KISS has
                  been promoting quality, holistic education, girl child
                  empowerment, vocational and life skill education, healthcare,
                  scientific temper and humanism and sustainable development. It
                  has arrested naxalism, hunger and malnutrition, child labour
                  and trafficking, early girl child marriage and dropout to a
                  large extent. The contribution of KISS in the field of sports
                  is immense. KISS has groomed around 5000 sportspersons who
                  have participated and excelled in prestigious national and
                  international events.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="https://kims.kiit.ac.in/"
            target="_blank"
            className="posterity-block"
          >
            <div>
              <div className="posterity-block-img-container">
                <img src={Kims} alt="" />
                <div className="hover">
                  <span>Visit Website</span>
                  <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
              <div className="posterity-block-text-container">
                <span>KIMS HOSPITAL</span>
                <p>
                  The Kalinga Institute of Medical Sciences (KIMS) is a
                  constituent unit of KIIT Deemed to be University. The
                  institute has redefined the healthcare services in Odisha and
                  in neighbouring states, anchored on a genuine desire to
                  promote a healthy society and provide advanced medical care.
                  The 2600 bedded medical college and hospital made a humble
                  beginning in 2007, and since then it has developed a distinct
                  identity for itself – delivering quality treatment in its
                  state of facilities at an affordable cost. The Medical College
                  has 20 broad speciality departments and 12 super speciality
                  departments, each of which is well managed by acclaimed
                  specialists and doctors who have made a name for themselves in
                  their respective fields.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <>
        <Articles />
      </>
      <>
        <PioneerEffort />
      </>

      <>
        <News />
      </>

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
          <Link to="/biography">Read More</Link>
          <div className="underline"></div>
        </div>
      </section>

      <>
        <InternationalVisit />
      </>

      <>
        <MPOffice />
      </>

      <>
        <WTS />
      </>
      <>
        <Social />
      </>
      <>
        <YouTube />
      </>

      <>
        <Footer />
      </>
    </div>
  );
};
