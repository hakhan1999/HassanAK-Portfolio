import React from "react";
import "../styles/Header.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#toolkit">Toolkit</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#perks">Perks</a>
        </li>
        <li>
          <a href="#real-talk">Real-Talk</a>
        </li>
        <li className="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
