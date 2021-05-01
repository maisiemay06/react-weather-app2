import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import "./Search.css";
import axios from "axios";
import FormatTime from "./FormatTime";
import Loader from "react-loader-spinner";
import Forecast from "./Forecast";
import MoreInfo from "./MoreInfo";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      sunset: <FormatTime time={new Date(response.data.sys.sunset * 1000)}/>,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "91afe9171359147d9b8594d8a2e6e434";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div>
    <div className="card">
      <div className="card-body"> 

    <form className="Search" onSubmit={handleSubmit}>
      <div className="row search">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          className="col-6 ml-3 m-1 rounded search-bar"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
          className="col-2 btn btn-info m-1"
        />
        <div>
          <input
            type="button"
            value="Current Location"
            className="col-12 btn btn-info m-1"
          />
        </div>
      </div>
    </form>
    </div>
    <CurrentWeather data={weatherData}/>
    </div>
    <MoreInfo data={weatherData}/>
  </div>
  );
  } else {
    searchCity();
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