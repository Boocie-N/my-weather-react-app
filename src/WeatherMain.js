import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemp from "./WeatherTemp";

function WeatherMain(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="current-weather-icon"
          />
          <span className="city-name">{props.data.city}</span>

          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherTemp celc={props.data.temperature} />

          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherMain;
