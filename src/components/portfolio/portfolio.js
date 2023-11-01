import React from "react";
import "./portfolio.css";
import Zoom from "react-reveal/Zoom";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import external from "../../assets/external.png";
import code from "../../assets/code.png";
import python from "../../assets/python.png";
import flask from "../../assets/flask.png";

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
            {/* project 1 */}
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
                  <p>- Built with -</p>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
              <div className="buttons">
                <div className="viewProjectBtn">
                  <a
                    className="codeLink"
                    href="https://github.com/Jordan966/weather-app"
                    target="blank"
                  >
                    Source Code
                  </a>
                  <a
                    className="projectLink"
                    href="https://jordan966.github.io/weather-app/"
                    target="blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">Razer Clone</h2>
                <p className="portfolioPara">
                  Tasked to create a landing page of my choice using only HTML
                  and CSS I had to accurately represent the page I was creating.
                  This project taught me the different types of display
                  properties and how to utilize them to reproduce existing
                  layouts.
                </p>
                <div className="techUsed">
                  <p>- Built with -</p>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                </div>
              </div>
              <div className="buttons">
                <div className="viewProjectBtn">
                  <a
                    className="codeLink"
                    href="https://github.com/Jordan966/razer-website-clone"
                    target="blank"
                  >
                    Source Code
                  </a>
                  <a
                    className="projectLink"
                    href="https://jordan966.github.io/razer-website-clone/"
                    target="blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 3 */}
            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">To-Do-List</h2>
                <p className="portfolioPara">
                  The To-Do List is a user-friendly web application designed
                  with HTML, CSS, and JavaScript that allows users to create and
                  manage their tasks while persistently saving the data in the
                  local storage of the user's browser. This feature ensures that
                  task lists are retained even after the browser is closed and
                  reopened.
                </p>
                <div className="techUsed">
                  <p>- Built with -</p>
                  <img src={html} alt="html" id="technologiesUsed" />
                  <img src={css} alt="css" id="technologiesUsed" />
                  <img src={js} alt="js" id="technologiesUsed" />
                </div>
              </div>
              <div className="buttons">
                <div className="viewProjectBtn">
                  <a
                    className="codeLink"
                    href="https://github.com/Jordan966/list-maker"
                    target="blank"
                  >
                    Source Code
                  </a>
                  <a
                    className="projectLink"
                    href="https://jordan966.github.io/list-maker/"
                    target="blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 4 */}
            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">Python Dice Game</h2>
                <p className="portfolioPara">
                  I designed and implemented a simple yet engaging dice game
                  using Python. The objective of the game is for players to
                  reach a total score of 50 by taking turns rolling a standard
                  six-sided die.
                </p>
                <div className="techUsed">
                  <p>- Built with -</p>
                  <img src={python} alt="python" id="technologiesUsed" />
                </div>
              </div>
              <div className="buttons">
                <div className="viewProjectBtn">
                  <a
                    className="codeLink"
                    href="https://github.com/Jordan966"
                    target="blank"
                  >
                    Source Code
                  </a>
                  <a
                    className="projectLink"
                    href="https://replit.com/@JordanD96/dice-game"
                    target="blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 5 */}
            <div className="portfolioCardNormal">
              <div className="portfolioText">
                <h2 className="portfolioHeading">FlaskDB - CRUD</h2>
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
                  <p>- Built with -</p>
                  <img src={python} alt="python" id="technologiesUsed" />
                  <img src={flask} alt="flask" id="technologiesUsed" />
                </div>
              </div>
              <div className="buttons">
                <div className="viewProjectBtn">
                  <a
                    className="codeLink"
                    href="https://github.com/Jordan966/flask-crud-films-db"
                    target="blank"
                  >
                    Source Code
                  </a>
                  <a
                    className="projectLink"
                    href="https://film-db-app.onrender.com/"
                    target="blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 6 */}

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
                  <div className="viewProjectBtn">
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
                  <div className="viewProjectBtn">
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
                  <div className="viewProjectBtn">
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
