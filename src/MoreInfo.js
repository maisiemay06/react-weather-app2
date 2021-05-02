import React from "react";
import "./MoreInfo.css";
import ReactAnimatedWeather from "react-animated-weather";



export default function MoreInfo(props) {
  return (
    <div className="card">
      <div className="card-body">
    <div className="row">
      <div className="col-3">
        <h6 className="sunrise">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#2d4f53"
          size={19}
          animate={true}
          />
         
           Sunrise
        </h6>
        <h6 className="sunrise-time">
          {props.data.sunrise}
        </h6>
      </div>
      <div className="col-3">
        <h6 className="sunset">
          <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="#2d4f53"
          size={22}
          animate={true}
          />
           Sunset
        </h6>
        <h6 className="sunset-time">
          {props.data.sunset}
        </h6>
      </div>
      <div className="col-3">
        <h6 className="humidity">
        <ReactAnimatedWeather
          icon="RAIN"
          color="#2d4f53"
          size={20}
          animate={true}
          />Humidity
        </h6>

        <h6 className="humid-value">
          {props.data.humidity}%
        </h6>
      </div>
      <div className="col-3">
        <h6 className="wind">
        <ReactAnimatedWeather
          icon="WIND"
          color="#2d4f53"
          size={20}
          animate={true}
          /> Wind
        </h6>
        <h6 className="wind-speed">
          {Math.round(props.data.wind)}mph
        </h6>
      </div>
    </div>
    </div>
    </div>
  
  );
}
