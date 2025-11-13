import React from "react";
import "./Styles/NewsCard.css";

export default function NewsCard({ article }) {
  return (
    <div className="news-card" data-aos="zoom-in">
      <img
        src={article.urlToImage || "/placeholder.jpg"}
        alt={article.title}
        className="news-img"
      />
      <div className="news-body">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-desc">
          {article.description
            ? article.description.length > 100
              ? article.description.slice(0, 100) + "..."
              : article.description
            : "No description available."}
        </p>
        <span className="news-date">
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
