import React, { useState, useEffect } from "react";
import "../Components/Styles/News.css";
import NewsCard from "../Components/NewsCard";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(""); // Search box stays empty
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "75df2b3abc4d487fbe2392837184f818";
  const DEFAULT_TOPIC = "Crime"; // Default news topic

  const fetchNews = async (topic) => {
    setLoading(true);
    setError("");
    setArticles([]); // Clear previous articles
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=12&apiKey=${API_KEY}`
      );
      const data = await res.json();
      if (data.articles && data.articles.length > 0) setArticles(data.articles);
      else setError("No results found.");
    } catch {
      setError("Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch default news on component mount
  useEffect(() => {
    fetchNews(DEFAULT_TOPIC);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchNews(query.trim());
  };

  return (
    <section id="news-section" data-aos="fade-up">
      <h2 className="section-title">🗞️ Top News Headlines</h2>

      <form id="news-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search news topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="status-msg">Loading news...</p>}
      {error && <p className="status-msg error">{error}</p>}

      <div id="news-grid">
        {articles.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </section>
  );
}
