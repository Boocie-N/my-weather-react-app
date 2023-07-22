import React from "react";
import CurrentDate from "./CurrentDate";

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
          <h3>
            {Math.round(props.data.temperature)}
            <span className="units">°C | °F</span>
          </h3>
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
