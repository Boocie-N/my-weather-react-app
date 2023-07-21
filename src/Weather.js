import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <img
            src="https://vanilla-weather-app-andi.netlify.app/img/04d.png"
            alt="moslty cloudy"
          />
          Pretoria
          <ul>
            <li>15:34, Sat Jul 21</li>
            <li>Overcast clouds</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>12°C</h3>
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
