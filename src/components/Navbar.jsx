import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const navLinks = [
  { id: 1, name: "Services", path: "#services" },
  { id: 2, name: "Toolkit", path: "#toolkit" },
  { id: 3, name: "Portfolio", path: "#portfolio" },
  { id: 4, name: "Perks", path: "#perks" },
  { id: 5, name: "Real-Talk", path: "#real-talk" },
  { id: 6, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      ...navLinks.map((link) =>
        document.getElementById(link.path.substring(1))
      ),
    ];

    const heroSection = document.getElementById("hero");
    if (heroSection) sections.push(heroSection);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          const sectionId = `#${visibleSection.target.id}`;
          if (sectionId === "#hero") {
            setActiveSection("");
          } else {
            setActiveSection(sectionId);
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <nav>
      <ul className="navbar">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.path ? "active" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
