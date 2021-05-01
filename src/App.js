import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Search defaultCity="Leeds"/>
              
      
            <div className="Footer">
      <a
        href="https://github.com/maisiemay06/react-weather-app2"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Open-source code
      </a>{" "}
      by Maisie Palmer
    </div>
      </div>
    </div>
  );
}
