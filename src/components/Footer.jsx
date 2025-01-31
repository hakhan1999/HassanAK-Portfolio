import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const menuLinks = [
  { id: 1, name: "Services", path: "#services" },
  { id: 2, name: "Toolkit", path: "#toolkit" },
  { id: 3, name: "Portfolio", path: "#portfolio" },
  { id: 4, name: "Perks", path: "#perks" },
  { id: 5, name: "Real-Talk", path: "#real-talk" },
  { id: 6, name: "Contact", path: "#contact" },
];

const externalLinks = [
  { id: 1, name: "Facebook", path: "#" },
  { id: 2, name: "LinkedIn", path: "#" },
];

const contactLinks = [
  { id: 1, name: "+92 336 3596507", path: "tel:+92 336 3596507" },
  {
    id: 2,
    name: "khanhassaan961@gmail.com",
    path: "mailto:khanhassaan961@gmail.com",
  },
];

const LegalLinks = [{ id: 1, name: "Privacy Policy", path: "#" }];

const Footer = () => {
  return (
    <footer>
      <div className="wrapper container">
        <p className="footer-heading">
          Want to keep up with my upcoming works? Reach Out Now.
        </p>
        <div className="footer-links">
          <div className="col-1">
            <div className="tag">{`{ Menu }`}</div>
            <ul>
              {menuLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2">
            <div className="tag">{`{ External }`}</div>
            <ul>
              {externalLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">
            <div className="tag">{`{ Contact }`}</div>
            <ul>
              {contactLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <div className="tag">{`{ Legal }`}</div>
            <ul>
              {LegalLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-5">
            <p>HASSAN AK. - - ©2025 ALL COPYRIGHTS RESERVED - -</p>
          </div>
        </div>
      </div>
      <div className="bg-image">
        <img src="src/assets/images/footer-lines.svg" alt="Lines Background" />
      </div>
    </footer>
  );
};

export default Footer;
