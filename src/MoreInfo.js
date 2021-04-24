import React from "react";
import "./MoreInfo.css";

export default function MoreInfo() {
  return (
    <div className="row">
      <div className="col-3">
        <h6 className="sunrise">
          <i className="fas fa-sun"></i>
          Sunrise
        </h6>
        <h6 className="sunrise-time" id="sunrise-time">
          06:00
        </h6>
      </div>
      <div className="col-3">
        <h6 className="sunset">
          <i className="fas fa-moon"></i>
          Sunset
        </h6>
        <h6 className="sunset-time" id="sunset-time">
          20:00
        </h6>
      </div>
      <div className="col-3">
        <h6 className="humidity">
          <i className="fas fa-tint"></i>
          Humidity
        </h6>

        <h6 className="humid-value" id="humidity">
          92%
        </h6>
      </div>
      <div className="col-3">
        <h6 className="wind">
          <i className="fas fa-wind"></i>
          Wind
        </h6>
        <h6 className="wind-speed" id="wind-speed">
          11mph
        </h6>
      </div>
    </div>
  );
}
