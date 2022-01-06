import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type in a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Budapest</h1>
      <ul>
        <li>Day, Time</li>
        <li>Description</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />

          <span className="temperature">6</span>
          <span className="celsius-unit">°C </span>
          <span className="fahrenheit-unit">| °F </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: XY%</li>
            <li>Humidity: XY% </li>
            <li>Wind: XY km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
