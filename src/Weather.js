import React, { useState } from 'react';
import keys from './keys';
import axios from 'axios';
import './Weather.css';

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Weather() {
  const datetimeBuild = (d) => {
    let datetime = String(new window.Date());
    let date = datetime.slice(3, 15);
    let time = datetime.slice(16, 21);
    return date + '  ' + time;
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then((res) => {
          setQuery('');
          setWeather(res.data);
          //   console.log(res.data);
        });
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Current Weather</h1>
      <input
        type='text'
        placeholder='Search city...'
        className='search-bar'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      ></input>
      {
        typeof weather.main !== 'undefined' ? (
          <div className='weather-container'>
            <p className='city'>
              {weather.name.toUpperCase()}, {weather.sys.country}
            </p>
            <div className='date'>{datetimeBuild(new Date())}</div>
            <h1 className='temp'>{Math.round(weather.main.temp - 273.15)}°C</h1>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        ) : (
          ''
        )
        // (
        // <div>
        //     <p className="city">SHANGHAI, CN</p>
        //     <div className="date">Jun 23, 2020</div>
        //     <h1 className="temp">25°C</h1>
        //     <div className="weather">Clouds</div>
        // </div>
        // )
      }
    </div>
  );
}

export default Weather;
