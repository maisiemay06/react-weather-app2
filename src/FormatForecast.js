import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FormatForecast(props) {
  function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

return days[day];

  } 
  
  return (
        <div className="forecast">
          <WeatherIcon icon={props.data.weather[0].icon} size={40}/>
          <p>
            {day()} 
            <br />
            <span className="temp-min">{Math.round(props.data.temp.min)}º </span> 
            <span className="temp-max">{ Math.round(props.data.temp.max)}º</span>
          <br /> 
          <span className="forecast-description text-capitalize">{props.data.weather[0].description}</span>
          </p>
        </div>
    )
}