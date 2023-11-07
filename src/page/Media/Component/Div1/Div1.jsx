import React from "react";
import { NavLink } from "react-router-dom";
import './Div1.css';

export const Div1 = () => {
  return (
    <div className="pmreport-div1">
      <div className="tns-heading">
        <span>Media</span>
      </div>
      <div className="mpreport-div1-span">
        <span>Articles</span>
      </div>
      <div className="qop-table">
        <table>
          <tr>
            <td>By Forbes</td>
            <td>
              How A Mother’s Wisdom Ignited India’s Social Revolution–Kalinga
              Institute Of Social Sciences
            </td>
            <td>
              <NavLink to="https://www.forbes.com/sites/jackieabramian/2020/06/18/how-a-mothers-wisdom-ignited-indias-social-revolutionkalinga-institute-of-social-sciences-kiss/?sh=17f44d383ac3">
                <span>View</span>
              </NavLink>
            </td>
          </tr>

          <tr>
            <td>By Telegraphindia</td>
            <td>Parliament proceedings adjourned amidst Opposition ruckus</td>
            <td>
              <NavLink to="https://www.telegraphindia.com/india/parliament-proceedings-adjourned-amidst-opposition-ruckus/cid/1925334">
                <span>View</span>
              </NavLink>
            </td>
          </tr>

          <tr>
            <td>By Scmp</td>
            <td>New school of thought</td>
            <td>
              <NavLink to="https://www.scmp.com/article/986046/new-school-thought">
                <span>View</span>
              </NavLink>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
