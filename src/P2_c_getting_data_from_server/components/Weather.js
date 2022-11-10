import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    axios
      .get("httpzzz://api.weatherstack.com/current", {
        params: {
          access_key: "bc33e76f485901f0d7e88896c4f4bcae",
          query: capital
        }
      })
      .then(response => {
        setWeather(response.data.current);
        setIcon(response.data.current.condition.icon);
        console.log(response);
      });
  }, [capital]);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <strong>{weather.temperature} Celsius</strong>

      <br />
      <img src={icon} alt="current weather" />
      <br />
      <strong>wind: </strong> {weather.wind_speed} kph {weather.wind_dir}
    </div>
  );
};

export default Weather;