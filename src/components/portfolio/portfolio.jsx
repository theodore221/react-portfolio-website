import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a project item title</h3>
          <a href="www.github.com" className="btn">
            Github
          </a>
          <a href="www.makeitwork.com" className="btn btn-primary">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
