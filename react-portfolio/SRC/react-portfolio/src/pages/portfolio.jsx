import React from "react";

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="portfolio-item">
          <img src={`project${i + 1}.jpg`} alt={`Project ${i + 1}`} />
          <h3>Project {i + 1}</h3>
          <a href="https://deployed-app.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href="https://github.com/repository" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
