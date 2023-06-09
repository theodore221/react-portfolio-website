import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/theodorexavier/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/theodore221" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
