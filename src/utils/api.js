import { NEWS_API_BASE, WEATHER_API_BASE, NEWS_API_KEY, WEATHER_API_KEY } from "./constants";

export async function fetchNews(city) {
  const res = await fetch(`${NEWS_API_BASE}/everything?q=${city}&apiKey=${NEWS_API_KEY}`);
  return await res.json();
}

export async function fetchWeather(city) {
  const res = await fetch(`${WEATHER_API_BASE}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
  return await res.json();
}
