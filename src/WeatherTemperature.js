import React, { useState } from "react";
import "./WeatherTemperature.css";


export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metric");
    
function convertToImperial(event) {
    event.preventDefault();
    setUnit("imperial");
}

function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
}

    if (unit === "metric") {
    return (
        <div>
        <h1>{Math.round(props.celsius)}</h1>
        <div className="unit-selector">
            <span>
              ºC
            </span>
            |
            <button href="" onClick={convertToImperial}>
              ºF
            </button>
          </div>
          </div>
    );
    } else {
        return(
            <div>
            <h1>{Math.round(((props.celsius) * 9/5) +32 )}</h1>
            <div className="unit-selector">
                <button href="" onClick={convertToMetric}>
                  ºC
                </button>
                |
                <span>
                  ºF
                </span>
              </div>
              </div>
        )
    }

}