import React from "react";
import "./landing.css";
import profile from "../../assets/jordanfade.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import Typed from "react-typed";
import { Fade } from "react-reveal";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Landing = () => {
  return (
    <div className="wave-container">
      <section id="intro">
        <div className="content">
          <Fade left>
            <span className="hello">Hello,</span>
            <span className="introText">
              I'm <span className="introName">Jordan</span>
              <br />
              <span id="webDevSpan">
                <Typed
                  strings={["Web Developer"]}
                  typeSpeed={100}
                  loop={false}
                  showCursor={false}
                />
              </span>
            </span>
            <p className="introPara">Front-End Developer from South London </p>
            <div className="tech">
              <p className="techPara">Technologies</p>
              <img src={html} alt="html" id="html" />
              <img src={css} alt="css" id="css" />
              <img src={js} alt="js" id="js" />
              <img src={react} alt="react" id="react" />
              <img src={tailwind} alt="tailwind" id="tailwind" />
            </div>
            <div className="socials">
              <a href="https://github.com/Jordan966" target="blank">
                <img src={github} alt="github" id="github" />
              </a>
              <a href="https://linkedin.com/in/jordan-dunne" target="blank">
                <img src={linkedin} alt="linkedin" id="linkedin" />
              </a>
            </div>
          </Fade>
          <img src={profile} alt="jordan" class="profile" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
