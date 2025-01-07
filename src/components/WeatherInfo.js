import React from "react";
import "../style/WeatherInfo.css";

function WeatherInfo({ weather }) {
  return (
    <div className="weather-info">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>Harorat: {weather.main.temp}°C</p>
      <p>Namlik: {weather.main.humidity}%</p>
      <p>Shamol tezligi: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
