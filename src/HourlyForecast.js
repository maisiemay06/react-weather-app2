
import axios from "axios";
import { useEffect, useState } from "react";
import "./Forecast.css";
import FormatHourlyForecast from "./FormatHourlyForecast";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import { ChevronDoubleUp } from "react-bootstrap-icons";

export default function HourlyForecast(props) {
let [loaded, setLoaded] = useState(false);
let [hourlyForecast, setHourlyForecast] = useState(null);
let [hourlyForecastVisible, setHourlyForecastVisible] = useState(false);

useEffect(() => {
setLoaded(false);
setHourlyForecastVisible(false);
}, [props.data.coords]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }


  function showHourlyForecast (event) {
    event.preventDefault();
    setHourlyForecastVisible(true);
      }


      function hideHourlyForecast (event) {
        event.preventDefault();
        setHourlyForecastVisible(false);
          }
   
if (hourlyForecastVisible) {
  return (
    <div className="card">
        <div className="card-body">
        <button onClick={hideHourlyForecast} className="col-12 less-button"> <ChevronDoubleUp /> {" Close Hourly Forecast"} 
      </button>
    <div className="row Forecast">
          {hourlyForecast.map(function (hourlyForecast, index){
            if (index > 0 && index < 6) {
            return (
             <div className="col text-center" key={index}>
              <FormatHourlyForecast data={hourlyForecast}/>
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
        <button onClick={showHourlyForecast} className="col-12"> <ChevronDoubleDown /> {" Show Hourly Forecast"} </button>
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
 