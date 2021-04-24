import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  console.log(city);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <div className="row search">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          className="col-6 ml-3 m-1 rounded search-bar"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
          className="col-2 btn btn-info m-1"
        />
        <div>
          <input
            type="button"
            value="Current Location"
            className="col-12 btn btn-info m-1"
          />
        </div>
      </div>
    </form>
  );
}
