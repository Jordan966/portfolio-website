import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/jdlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import email from "../../assets/email.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 400,
    });
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const linkClick = () => {
    scrollToTop();
    toggleSidebar();
  };

  return (
    <nav className="navbar" id="navbar">
      <img src={logo} alt="logo" className="logo" />
      {/* DESKTOP NAV */}
      <div className="menu">
        <div className="menuContainer">
          <Link
            className="menuItem scrollLink"
            activeClass="active"
            spy={true}
            to="navbar"
            onClick={scrollToTop}
          >
            Home
            <hr className="menuSeparator" />
          </Link>
          <Link
            className="menuItem scrollLink"
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            About Me
            <hr className="menuSeparator" />
          </Link>
          <Link
            className="menuItem scrollLink"
            activeClass="active"
            spy={true}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
            <hr className="menuSeparator" />
          </Link>
        </div>
      </div>
      <Link className="scrollLink" to="contact" smooth={true} duration={500}>
        <button className="contactButton">
          Contact <img src={email} alt="email icon" className="emailIcon" />
        </button>
      </Link>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <Link
            className="burger-links"
            activeClass="active"
            spy={true}
            to="navbar"
            onClick={linkClick}
          >
            Home
          </Link>
          <Link
            className="burger-links"
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="burger-links"
            activeClass="active"
            spy={true}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            className="burger-links"
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </aside>
      {/* END OF DESKTOP NAV */}
    </nav>
  );
};

export default Navbar;
