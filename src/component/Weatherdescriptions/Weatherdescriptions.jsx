import React from 'react'
import './Weatherdescriptions.css';
import { GiWindSlap } from 'react-icons/gi';
import { GiSpeedometer } from 'react-icons/gi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BiFace } from 'react-icons/bi';
function Weatherdescriptions({weather}) {
  return (

    <div className='Weather_description'>
        <div className='Weather_Perameters'>
            <h1>Humidity</h1>
            <span><MdOutlineWaterDrop/></span>
            <small>{weather.humidity}</small>
        </div>

        <div className='Weather_Perameters'>
            <h1>feels_like</h1>
            <span><BiFace/></span>
            <small>{weather.feels_like}</small>
        </div>

        <div className='Weather_Perameters'>
            <h1>Pressure</h1>
            <span><GiSpeedometer/></span>
            <small>{weather.pressure}</small>
        </div>

        <div className='Weather_Perameters'>
            <h1>Sunset</h1>
            <span><GiWindSlap/></span>
            <small>{weather.sunset}</small>
        </div>
    </div>

  )
}

export default Weatherdescriptions