import React from 'react'
import { NavLink } from 'react-router-dom'

export const PoliticsNav = ({handleMenu}) => {
  return (
    <div>
            <div className="sidebar navbar">
      <div className="main-menu">
        <NavLink to="/politics" className="Menu">
          <span onClick={handleMenu}>Main Menu</span>
        </NavLink>
      </div>
      <div  className="rest-menu">
                
      <div>
        <NavLink to="/qop" className="Menu">
          <span onClick={handleMenu}>Question on Parliament</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/spq" className="Menu">
          <span onClick={handleMenu}>Supplementary Question</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/spm" className="Menu">
          <span onClick={handleMenu}>Special Mentions</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dns" className="Menu">
          <span onClick={handleMenu}>Debate & Speaks</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/dog" className="Menu">
          <span onClick={handleMenu}>Discussion on Government</span>
        </NavLink>
      </div>

      <div>
        <NavLink to="/cmm" className="Menu">
          <span onClick={handleMenu}>Committee Membership</span>
        </NavLink>
      </div>

      </div>


    </div>
    </div>
  )
}
