import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/proj1.png";
import IMG2 from "../../assets/proj2.jpg";
import IMG3 from "../../assets/proj3.jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Forkify",
    github: "https://github.com/theodore221/Forkify",
    demo: "demo1",
  },
  {
    id: 2,
    image: IMG3,
    title: "Mapty",
    github: "https://github.com/theodore221/Mapty",
    demo: "demo1",
  },
  {
    id: 3,
    image: IMG1,
    title: "Tic Tac Toe",
    github: "https://github.com/theodore221/tictactoe",
    demo: "demo1",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
