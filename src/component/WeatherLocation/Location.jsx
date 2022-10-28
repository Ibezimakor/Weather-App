import React from 'react'
import './Location.css';
import { IoLocation, IoNavigateCircleSharp } from 'react-icons/io5';
function Location(props) {
  return (
    <div className='Location'>

        <div><span className='Country'>{props.Country}</span>
        </div>
       
        <span className='Icon'><IoLocation/></span><span className='City'>{props.City}</span>
    
       </div>

  )
}

export default Location  