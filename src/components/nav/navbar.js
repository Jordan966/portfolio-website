import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/jdlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import burgerMenu from "../../assets/burgermenu.svg";
import email from "../../assets/email.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 400,
    });
  };

  const [showMenu, setShowMenu] = useState(false);

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
      {/* END OF DESKTOP NAV */}

      {/* MOBILE NAV - Burger */}
      <div className="mobileMenu">
        <img
          src={burgerMenu}
          alt="burger menu"
          className="mobileMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="burgerMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            className="mobileMenuItem scrollLink"
            activeClass="active"
            spy={true}
            to="navbar"
            onClick={() => setShowMenu(false)}
          >
            Home
            <hr className="menuSeparator" />
          </Link>
          <Link
            className="mobileMenuItem scrollLink"
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About Me
            <hr className="menuSeparator" />
          </Link>
          <Link
            className="mobileMenuItem scrollLink"
            activeClass="active"
            spy={true}
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Portfolio
            <hr className="menuSeparator" />
          </Link>
        </div>
      </div>
      {/* END OF MOBILE NAV */}
    </nav>
  );
};

export default Navbar;
