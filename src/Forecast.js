import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="card">
      <div className="card-body">
    <div className="row Forecast" id="forecast">
      <div className="col-2 text-center">
        <div className="forecast">
          <WeatherIcon icon={props.data.icon} size="40"/>
          <p>
            Tuesday <br />
            15º
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
