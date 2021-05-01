import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import FormatForecast from "./FormatForecast";

export default function Forecast(props) {
  
  return (
    <div className="card">
      <div className="card-body">
    <div className="row Forecast" id="forecast">
      <div className="col-2 text-center">
      <FormatForecast />
      </div>
    </div>
    </div>
    </div>
  );
  }
  