import React from "react";
import "./portfolio.css";
import Zoom from "react-reveal/Zoom";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import github from "../../assets/github.png";

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
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">Razer Clone</h2>
                <p className="portfolioPara">
                  My first project, tasked to create a landing page of my choice
                  using only HTML and CSS I had to accurately represent the page
                  i was creating. This project taught me the different types of
                  display properties and how to utilize them to reproduce
                  existing layouts.
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">To-Do List</h2>
                <p className="portfolioPara">
                  The To-Do List is a user-friendly web application designed
                  with HTML, CSS, and JavaScript that allows users to create and
                  manage their tasks while persistently saving the data in the
                  local storage of the user's browser. This feature ensures that
                  task lists are retained even after the browser is closed and
                  reopened
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">Python Dice Game</h2>
                <p className="portfolioPara">
                  Text goes here......Text goes here......Text goes
                  here......Text goes here......Text goes here......Text goes
                  here......Text goes here......Text goes here......Text goes
                  here......Text goes here......Text goes here......
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">FlaskDB - CRUD Project</h2>
                <p className="portfolioPara">
                  This is a web application built with Flask, Python and SQL
                  that allows users to create and manage a database of movies.
                  This application provides a user-friendly interface for
                  performing CRUD (Create, Read, Update, Delete) operations on
                  movie records. Users can easily add new movies, view the
                  existing catalog, update movie details, and remove movies from
                  the database.
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">Python Media </h2>
                <p className="portfolioPara">
                  My first project, tasked to create a landing page of my choice
                  using only HTML and CSS I had to accurately represent the page
                  i was creating. This project taught me the different types of
                  display properties,
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div>

            {/* <div className="portfolioCardReversed">
              <img src={Portfolio2} alt="" className="portfolioImage" />
              <div className="portfolioText">
                <h2 className="portfolioHeading">Razer Clone</h2>
                <p className="portfolioPara">
                  My first project, tasked to create a landing page of my choice
                  using only HTML and CSS I had to accurately represent the page
                  i was creating. This project taught me the different types of
                  display properties,
                </p>
                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                </div>
              </div>
            </div> */}
            {/* 
            <div className="portfolioCardNormal">
              <iframe
                src="https://replit.com/@JordanD96/weather-app?embed=true"
                className="portfolioImage"
              ></iframe>
              <div className="portfolioText">
                <div className="titlecontainer">
                  <h2 className="portfolioHeading">Weather App</h2>
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                </div>
                <p className="portfolioPara">
                  The WeatherApp is a user-friendly web application that
                  provides real-time weather information to users based on their
                  location or a location they specify. This project leverages
                  the power of HTML, CSS, and JavaScript in conjunction with the
                  OpenWeatherMap API to deliver accurate and up-to-date weather
                  forecasts.
                </p>

                <div className="techUsed">
                  <div className="projectSource">
                    <img src={github} alt="github" id="github" />
                  </div>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
            </div> */}
          </Zoom>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
