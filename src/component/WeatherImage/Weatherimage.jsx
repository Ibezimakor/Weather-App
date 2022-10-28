import React from 'react'
import './Weatherimage.css'
import { FaRegMoon} from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { TiInfoLargeOutline } from 'react-icons/ti';
function Weatherimage(props) {
  return (
    <div className='WeatherImage'>
     <h2 className='Weather_Statement'><span className='icon'><img src={props.icon} alt="" /><h4/></span>{props.rate} hdhjdi</h2>
      <h2 className='Weather_statement2'><span className='icon'><TiInfoLargeOutline/></span>{props.dec} </h2>
    </div>
  )
}

export default Weatherimage