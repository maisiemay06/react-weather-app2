import React, { useState }from "react";
import "./CurrentWeather.css";
import axios from 'axios';

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    })
    setReady(true);
  
  }
  
  if (ready) {

    return (
      <div className="row">
        <div className="col-6">
          <h2 className="city" id="city-name">
            {weatherData.city}
          </h2>
          <h4 className="current-weather" id="weather-description">
            Currently {weatherData.description}
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
            Monday, 00:00
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
      </div>
    );  
  } else {
    const apiKey = "d8f001fd84ae14313a7e46b613ac8c97";
    let city = "Leeds";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
  

}