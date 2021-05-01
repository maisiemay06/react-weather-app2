import React from "react";
import "./CurrentWeather.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
    return (
      <div className="weather-body">
      <div className="row">
        <div className="col-6">
          <h2 className="city" id="city-name">
            {props.data.city}
          </h2>
          <h4 className="current-weather text-capitalize" id="weather-description">
            {props.data.description}
          </h4>
            <WeatherTemperature celsius={props.data.temperature}/>
          <h4 className="date-time" id="day-time">
            <FormatDate date={props.data.date} />
          </h4>
        </div>
        <div className="col-6">
          <div className="weather-icon">
            <WeatherIcon icon={props.data.icon} size={150}
            />
          </div>
        </div>
      </div>
      </div>
    );  
  }
  