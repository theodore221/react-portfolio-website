import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/login.PNG";
import IMG2 from "../../assets/proj2.jpg";
import IMG3 from "../../assets/proj3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Login Form",
    description:
      "A simple clean login form UI for web applications. Stack: React, CSS",
    github: "https://github.com/theodore221/login-form",
    demo: "https://theodore221.github.io/login-form/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Forkify",
    description:
      "Forkify is a recipe management application that allows users to search, modify and favourite recipes. Recipe data is polled from a public API and users can also uploade recipe data to be stored. Stack: Javascript, HTML, CSS",
    github: "https://github.com/theodore221/Forkify",
    demo: "demo1",
  },
  {
    id: 3,
    image: IMG3,
    title: "Mapty",
    description:
      "A simple clean login form UI for web applications. Stack: React, CSS",
    github: "https://github.com/theodore221/Mapty",
    demo: "demo1",
  },
  {
    id: 3,
    image: IMG1,
    title: "Tic Tac Toe",
    description:
      "A simple clean login form UI for web applications. Stack: React, CSS",
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio__item-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className="btn">
                    Github
                  </a>
                  <a href={demo} target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
