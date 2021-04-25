import React, { useState }from "react";
import "./CurrentWeather.css";
import axios from 'axios';
import Loader from "react-loader-spinner";
import MoreInfo from "./MoreInfo";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
  
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      sunrise: <FormatTime time={new Date(response.data.sys.sunrise * 1000)}/>,
      sunset: <FormatTime time={new Date(response.data.sys.sunset * 1000)}/>
    });
  
  }
  
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-6">
          <h2 className="city" id="city-name">
            {weatherData.city}
          </h2>
          <h4 className="current-weather text-capitalize" id="weather-description">
            {weatherData.description}
          </h4>
          <h1 className="temperature" id="current-temperature">
            {Math.round(weatherData.temperature)}
          </h1>
          <div className="unit-selector">
            <button href="" id="celcius-selector" className="active">
              ºC
            </button>{" "}
            |
            <button href="" id="fahrenheit-selector">
              ºF
            </button>
          </div>
          <h4 className="date-time" id="day-time">
            <FormatDate date={weatherData.date} />
          </h4>
        </div>
        <div className="col-6">
          <div className="weather-icon">
            <img
              src="https://pixy.org/src/22/thumbs350/225537.jpg"
              id="weather-icon"
              width="150px"
              alt="cloud icon"
            />
          </div>
        </div>
        <div className="card more-info-card">
            <MoreInfo sunrise={weatherData.sunrise} sunset={weatherData.sunset} humidity={weatherData.humidity} wind={weatherData.wind}/>
          </div>
      </div>
      
    );  
  } else {
    const apiKey = "91afe9171359147d9b8594d8a2e6e434";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading">
        Loading
      <Loader
        type="ThreeDots"
        color="#3398a4"
        height={40}
        width={40}
        />
        </div>
    )
  }
  

}