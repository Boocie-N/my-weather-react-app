import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function getResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      date: "15:34, Sat Jul 21",
    });
  }

  if (weatherInfo.ready) {
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
              src={weatherInfo.iconUrl}
              alt={weatherInfo.description}
              className="current-weather-icon"
            />
            <span className="city-name">{weatherInfo.city}</span>

            <ul>
              <li>{weatherInfo.date}</li>
              <li className="text-capitalize">{weatherInfo.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <h3>
              {Math.round(weatherInfo.temperature)}
              <span className="units">°C | °F</span>
            </h3>
            <ul>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {weatherInfo.wind}km/h</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "33b2dd0bdtf63faf92eoc3485e96bfca";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);

    return "Loading...";
  }
}

export default Weather;
