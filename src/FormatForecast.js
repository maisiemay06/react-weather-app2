import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FormatForecast(props) {
    return (
        <div className="forecast">
          <WeatherIcon icon={"01d"} size={40}/>
          <p>
            Tuesday <br />
            <span className="temp-min">12º</span> <span className="temp-max">15º</span>
          </p>
        </div>
    )
}