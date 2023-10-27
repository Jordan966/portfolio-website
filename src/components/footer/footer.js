import React from "react";
import "./footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="wave-container3">
      <p className="footer-text">
        Designed by Jordan Dunne | Made with{" "}
        <span className="love">&#10084;</span>
      </p>
      <div className="footer-icons">
        <a href="https://github.com/Jordan966" target="blank">
          <img src={github} alt="github" id="github" />
        </a>
        <span id="slash">/</span>
        <a href="https://linkedin.com/in/jordan-dunne" target="blank">
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
