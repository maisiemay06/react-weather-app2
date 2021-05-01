
import "./Forecast.css";
import FormatForecast from "./FormatForecast";

export default function Forecast() {
  
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
  