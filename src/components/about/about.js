import React from "react";
import "./about.css";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="wave-container2">
      <section className="about" id="about">
        <Fade bottom>
          <span className="aboutTitle">So, who am I?</span>
          <span className="aboutDesc">
            I'm <span className="aboutName">Jordan</span>, a friendly individual
            who loves to learn. My journey into this exciting field began when I
            decided to enroll in a software developer bootcamp. Graduating the
            bootcamp was a significant milestone for me. The program provided an
            intensive and immersive experience, equipping me with the
            fundamental building blocks of web development. I gained a strong
            understanding of <span className="bolder">HTML</span>,{" "}
            <span className="bolder">CSS</span> and{" "}
            <span className="bolder">JS</span> which taught me the importance of
            responsive design, web accessibility, and clean coding practices. My
            journey expanded into learning <span className="bolder">REACT</span>{" "}
            alongside <span className="bolder">Tailwind CSS</span> to better
            equip myself to fit the industry using a modern tech skill-set.
          </span>
        </Fade>
      </section>
    </div>
  );
};

export default About;
