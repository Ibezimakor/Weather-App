import React from 'react'
import './Temperture.css';

function Temperture(props) {
  return (
    <div>
        <div><h1 className='temp'>{props.temp}</h1> <h1 className='Degree'>o</h1></div>
    
    </div>
  )
}

export default Temperture