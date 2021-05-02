import React, { useState } from "react";
import "./MoreInfo.css";
import ReactAnimatedWeather from "react-animated-weather";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import { ChevronDoubleUp } from "react-bootstrap-icons";

export default function MoreInfo(props) {
let [visible, setVisible] = useState(false);

function showMore(event) {
event.preventDefault();
setVisible(true);
}

function showLess(event) {
  event.preventDefault();
  setVisible(false);
  }

if (visible) {
  return(
    <div className="card">
      <div className="card-body">
      <button onClick={showLess} className="col-12 less-button"> <ChevronDoubleUp /> {" Less Info"} 
      </button>
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
} else {
  return(
    <div className="card">
    <div className="card-body">
  <button onClick={showMore} className="col-12"> <ChevronDoubleDown /> {" More Info"}
  
  </button>
  </div>
  </div>
)
}
}