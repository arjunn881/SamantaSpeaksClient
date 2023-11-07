import React from 'react'
import './TNS.css';
import { Subidebara } from '../../../../components/sidebar/Biography/Subsidebar'
import { Div1 } from './Component/Div1/Div1';
import { Div2 } from './Component/Div2/Div2';

export const TNS = () => {
  return (
    <div className='tns'>
        <div className="tns-left">
            <Subidebara/>
        </div>

        <div className="tns-right">
          <div className="tns-heading">
            <span className='tns-heading-span'>A Short Biography</span>
          </div>
        <Div1/>
        <Div1/>
        <Div2/>
        </div>
    </div>
  )
}