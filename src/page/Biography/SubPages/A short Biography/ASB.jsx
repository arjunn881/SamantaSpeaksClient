import React from 'react'
import './ASB.css';
import { Subidebara } from '../../../../components/sidebar/Biography/Subsidebar'
import { Div1 } from './Component/Div1/Div1';



export const ASB = () => {
  return (
    <div className='asb'>
        <div className="asb-left">
            <Subidebara/>
        </div>

        <div className="asb-right">
        <div className="tns-heading">
            <span>A Short Biography</span>
          </div>
          <Div1/>
          <Div1/>
        </div>
    </div>
  )
}


