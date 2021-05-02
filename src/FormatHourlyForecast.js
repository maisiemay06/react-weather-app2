import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FormatHourlyForecast(props) {
  function time() {
let date = new Date(props.data.dt * 1000);
let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    };
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    };
    return <span>{hours}:{minutes}</span>;

  } 
  
  return (
        <div className="forecast">
          <WeatherIcon icon={props.data.weather[0].icon} size={40}/>
          <p>
            {time()} 
            <br />
            <span >{Math.round(props.data.temp)}º </span> 
          <br /> </p>
        </div>
    )
}