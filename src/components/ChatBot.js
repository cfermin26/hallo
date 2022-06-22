import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className="sticky-chat">
      <a
        href="https://wa.me/+593982522222"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/assets/chatbot.svg"
          alt="Hallo banner"
          layout="fullWidth"
          className="chatbot-logo"
        />
      </a>
    </div>
  );
};

export default Footer;
