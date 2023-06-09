import React from "react";
import "./about.css";
import about_me from "../../assets/about_me.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about_me} alt="about_me" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about_card"></article>
          </div> */}
          <p>
            Results-oriented junior software engineer with a proven track record
            of delivering high-quality solutions and providing value to
            organizations. Proficient in full-stack development, project
            management, and technical consulting, I am dedicated to leveraging
            my expertise to contribute to the success of your company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
