import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherMain from "./WeatherMain";
import WeatherForecast from "./WeatherForecast";

function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function getResponse(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }

  function searchCity() {
    const apiKey = "33b2dd0bdtf63faf92eoc3485e96bfca";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function receiveSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form onSubmit={receiveSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleChange}
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
        <WeatherMain data={weatherInfo} />
        <hr />
        <div className="WeeklyHeader">This Week's Weather Forecast</div>
        <WeatherForecast
          coordinates={weatherInfo.coordinates}
          city={weatherInfo.city}
        />
      </div>
    );
  } else {
    searchCity();
    return "Loading Weather...";
  }
}

export default Weather;
