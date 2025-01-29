import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, name: "Services", path: "#services" },
  { id: 2, name: "Toolkit", path: "#toolkit" },
  { id: 3, name: "Portfolio", path: "#portfolio" },
  { id: 4, name: "Perks", path: "#perks" },
  { id: 5, name: "Real-Talk", path: "#real-talk" },
  { id: 6, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
