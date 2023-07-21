import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <img
            src="https://vanilla-weather-app-andi.netlify.app/img/04d.png"
            alt="moslty cloudy"
            className="current-weather-icon"
          />
          <span className="city-name">Pretoria</span>

          <ul>
            <li>15:34, Sat Jul 21</li>
            <li>Overcast clouds</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>
            12<span className="units">°C | °F</span>
          </h3>
          <ul>
            <li>Humidity: 70%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Weather;
