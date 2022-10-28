const API_key ='765a484e054afe13219781c19f6dd169'
const weatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

const getWeatherData =async (city, unit = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${unit}`;
    
    const data = await fetch(URL).then((Response) => Response.json()).then((data) => data);
    const{weather,main: {temp,feels_like,pressure, humidity},
    weather:{main},
    sys: {country,sunset},
    name,
    
} = data;


const {description, icon} = weather[0];
return { 
    main,
    description,
    iconURL:weatherIcon(icon),
    temp,
    feels_like,
    pressure,
    humidity,
    country,
    name,

};
};

export {getWeatherData};