import React, { useState } from "react";

function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");

  function displayFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celc * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <h3>
          {Math.round(props.celc)}
          <span className="units">
            °C |
            <a href="/" onClick={displayFar}>
              {" "}
              °F
            </a>
          </span>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h3>
          {Math.round(fahrenheit())}
          <span className="units">
            <a href="/" onClick={displayCel}>
              °C
            </a>{" "}
            | °F
          </span>
        </h3>
      </div>
    );
  }
}

export default WeatherTemp;
