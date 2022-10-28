import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weatherimage from './component/WeatherImage/Weatherimage';
import Location from './component/WeatherLocation/Location';
import Search from './component/search/Search';
import Location_image from './component/Location_image/Location_image';
import Temperture from './component/Weatherparameters/Temperture';
import Weatherdescriptions from './component/Weatherdescriptions/Weatherdescriptions';
import { getWeatherData } from './Weatherserver';
import { useEffect, useState } from 'react';

function App() {

const [weather, setWeather] = useState()
   useEffect(() =>{
  const fetchweather = async() => {
    const data = await getWeatherData('lagos')
    setWeather(data);
  }

  fetchweather();    
     },[])

  return (
      <div className='app_view'>
    

      {
      weather && (
      <div className='main_app'>
        <Search/>
          <div className='weather-component'>
            <Location Country ={weather.country} City = {weather.name}/>
            <Temperture temp = {weather.temp.toFixed()}/>
            <Weatherimage icon = {weather.iconURL}  rate= {weather.main} dec = {weather.description}/>
            <Weatherdescriptions weather ={weather}/>
          </div>
      </div>
      
      )
      }

      </div>
    
   
    
  );
}

export default App;
