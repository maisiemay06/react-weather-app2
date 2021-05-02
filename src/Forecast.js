
import axios from "axios";
import { useEffect, useState } from "react";
import "./Forecast.css";
import FormatForecast from "./FormatForecast";

export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
setLoaded(false);
}, [props.data.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="card">
        <div className="card-body">
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
    );
 
  }
  
  
  else { 
    let apiKey = `d8f001fd84ae14313a7e46b613ac8c97`;
    let lon = props.data.coords.lon;
    let lat = props.data.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
  
    return null;
  }
}
  