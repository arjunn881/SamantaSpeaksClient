import React from 'react'
import { Sidebar } from "../../components/sidebar/Sidebar";
import  '../../page/landing/Landing.css'

export const InternationalVisit = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        International Visit
      </div>
    </div>
  )
}
