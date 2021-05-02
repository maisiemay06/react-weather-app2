
import axios from "axios";
import "./Forecast.css";
import FormatForecast from "./FormatForecast";

export default function Forecast(props) {


  function handleResponse(response) {
    console.log(response.data);

  }

  let apiKey = `91afe9171359147d9b8594d8a2e6e434`;
  let lon = props.data.lon;
  let lat = props.data.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
  axios.get(apiUrl).then(handleResponse);

  
  return (
    <div className="card">
      <div className="card-body">
    <div className="row Forecast">
      <div className="col-2 text-center">
      <FormatForecast />
      </div>
    </div>
    </div>
    </div>
  );
  }
  