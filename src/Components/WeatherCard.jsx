import React from "react";
import "./Styles/WeatherCard.css";

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card" data-aos="zoom-in">
      <h3 className="city">{weather.name}</h3>
      <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
      <p className="condition">{weather.weather[0].description}</p>
      <div className="details">
        <span>💧 {weather.main.humidity}% Humidity</span>
        <span>🌬️ {weather.wind.speed} m/s Wind</span>
        <span>🌡️ Feels like {weather.main.feels_like}°C</span>
      </div>
    </div>
  );
}
