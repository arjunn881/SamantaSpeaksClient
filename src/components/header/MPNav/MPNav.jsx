import React from 'react'
import { NavLink } from 'react-router-dom'

export const MPNav = ({handleMenu}) => {
  return (
    <div>
        
        <div className="sidebar navbar">
      <div className="main-menu">
        <NavLink to="/" className="Menu">
          <span onClick={handleMenu}>Main Menu</span>
        </NavLink>
      </div>
      <div  className="rest-menu">
                
      <div>
        <NavLink to="/aboutkm" className="Menu">
          <span onClick={handleMenu}>About Kandhamal</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/mpreport" className="Menu">
          <span onClick={handleMenu}>MP Reports</span>
        </NavLink>
      </div>

      </div>


    </div>
    </div>
  )
}
