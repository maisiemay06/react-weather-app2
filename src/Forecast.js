import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="card">
      <div className="card-body">
    <div className="row Forecast" id="forecast">
      <div className="col-2 text-center">
        <div className="forecast">
          <img
            src="https://pixy.org/src/22/thumbs350/225537.jpg"
            className="icon"
            alt="weather icon"
          />
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
