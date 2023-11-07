import React from 'react'
import { Sidebar } from "../../components/sidebar/Sidebar";
import  '../../page/landing/Landing.css'
// import { WTS } from '../../components/WTS/WTS';
import { Testimonies } from '../../components/WTS/Testimonies/Testimonies';

export const Testimonial = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <Testimonies/>
      </div>
    </div>
  )
}
