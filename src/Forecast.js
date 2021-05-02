
import axios from "axios";
import { useEffect, useState } from "react";
import "./Forecast.css";
import FormatForecast from "./FormatForecast";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import { ChevronDoubleUp } from "react-bootstrap-icons";

export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
let [forecastVisible, setForecastVisible] = useState(false);

useEffect(() => {
setLoaded(false);
}, [props.data.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }


  function showForecast (event) {
    event.preventDefault();
    setForecastVisible(true);
      }


      function hideForecast (event) {
        event.preventDefault();
        setForecastVisible(false);
          }
   
if (forecastVisible) {
  return (
    <div className="card">
        <div className="card-body">
        <button onClick={hideForecast} className="col-12 less-button"> <ChevronDoubleUp /> {" Close Forecast"} 
      </button>
    <div className="row Forecast">
          {forecast.map(function (dailyForecast, index){
            if (index > 0 && index < 6) {
            return (
             <div className="col text-center" key={index}>
              <FormatForecast data={dailyForecast}/>
              </div>
            );
            } else {
              return null;
            }
            })}  
        </div>
        </div>
        </div>
        
  )
}

  if (loaded) {
    return (
      <div className="card">
        <div className="card-body">
        <button onClick={showForecast} className="col-12"> <ChevronDoubleDown /> {" Five-Day Forecast"} </button>
        </div>
      </div>
    );
 
  }  else { 
    let apiKey = `d8f001fd84ae14313a7e46b613ac8c97`;
    let lon = props.data.coords.lon;
    let lat = props.data.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
  
    return null;
  }
}
 