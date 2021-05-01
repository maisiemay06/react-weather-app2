import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FormatForecast(props) {
    return (
        <div className="forecast">
          <WeatherIcon icon={"01d"} size={40}/>
          <p>
            Tuesday <br />
            12º/15º
          </p>
        </div>
    )
}