import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <CurrentWeather defaultCity="Leeds"/>
          </div>
        </div>
     
        <div className="card">
          <div className="card-body">
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
