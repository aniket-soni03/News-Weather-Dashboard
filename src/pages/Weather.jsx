import React, { useState } from "react";
import "../Components/Styles/Weather.css";
import WeatherCard from "../Components/WeatherCard";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "a73a9bd3ace34c49acb2c60cf2bb1b4f";

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const result = await res.json();
      if (result.cod === 200) setData(result);
      else setError("City not found.");
    } catch {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city.trim());
  };

  return (
    <section id="weather-section" data-aos="fade-up">
      <h2 className="section-title">🌤️ Weather Forecast</h2>

      <form id="weather-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>

      {loading && <p className="status-msg">Fetching weather...</p>}
      {error && <p className="status-msg error">{error}</p>}

      <div id="weather-grid">
        {data && <WeatherCard weather={data} />}
      </div>
    </section>
  );
}
