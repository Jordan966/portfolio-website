import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/weather-app.jpg";
import Portfolio2 from "../../assets/razer.jpg";
import Zoom from "react-reveal/Zoom";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import github from "../../assets/github.png";
import externalLink from "../../assets/external-link.png";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <h2 className="portfolioTitle">Portfolio</h2>
        <span className="portfolioDesc">
          I take pride in my attention for detail as you will in the projects
          below.
        </span>
        <div className="portfolioContainer">
          <Zoom>
            <div className="portfolioCardNormal">
              <img src={Portfolio1} alt="" className="portfolioImage" />
              <div className="portfolioText">
                <h2 className="portfolioHeading">Weather App</h2>
                <p className="portfolioPara">
                  The WeatherApp is a user-friendly web application that
                  provides real-time weather information to users based on their
                  location or a location they specify. This project leverages
                  the power of HTML, CSS, and JavaScript in conjunction with the
                  OpenWeatherMap API to deliver accurate and up-to-date weather
                  forecasts.
                </p>
                <div className="projectSource">
                  <img src={github} alt="github" id="github" />
                  <p className="githubLink">
                    Project
                    <img src={externalLink} id="externalLink" />
                  </p>
                </div>
                <div className="techUsed">
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardReversed">
              <img src={Portfolio2} alt="" className="portfolioImage" />
              <div className="portfolioText">
                <h2 className="portfolioHeading">Razer Clone</h2>
                <p className="portfolioPara">
                  My first project, tasked to create a landing page of my choice
                  using only HTML and CSS I had to accurately represent the page
                  i was creating. This project taught me the different types of
                  display properties,
                </p>
                <div className="projectSource">
                  <img src={github} alt="github" id="github" />
                  <p className="githubLink">
                    Project
                    <img src={externalLink} id="externalLink" />
                  </p>
                </div>
                <div className="techUsed">
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
