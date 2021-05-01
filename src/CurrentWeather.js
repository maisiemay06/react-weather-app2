import React from "react";
import "./CurrentWeather.css";
import FormatDate from "./FormatDate";

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
          <h1 className="temperature" id="current-temperature">
            {Math.round(props.data.temperature)}
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
            <FormatDate date={props.data.date} />
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
      </div>
    );  
  
  }
  