import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <a href="/" className="home-link">
          <div className="logo-sec">
            <img src="src/assets/images/logo.svg" alt="Logo" />
          </div>
          <div className="name-sec">
            <p className="top">Hassan Ahmed Khan</p>
            <p className="bottom">Creative Developer</p>
          </div>
        </a>
        <Navbar />
        <li className="contact-desktop">
          <a href="#contact">Contact</a>
        </li>
      </div>
    </header>
  );
};

export default Header;
