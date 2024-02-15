import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TX
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://instagram.com">
          <FaInstagram />
        </a> */}
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
