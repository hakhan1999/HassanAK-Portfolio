import React from "react";
import "../styles/Toolkit.css";

const techStack = [
  "GSAP",
  "ZAPIER",
  "MAKE.COM",
  "BASIN",
  "RECAPTCHA",
  "GTM",
  "GA4",
  "CALENDLY",
  "SWIPER",
  "MAPBOX",
  "MEMBERSTACK",
  "GOOGLE MAPS",
  "CONVERTKIT",
  "FS ATTRIBUTES",
  "WEGLOT",
  "MAILCHIMP",
];

const Toolkit = () => {
  return (
    <section className="toolkit-sec" id="toolkit">
      <div className="bg-image">
        <img src="src/assets/images/hero-bg.svg" alt="Lines Background" />
      </div>
      <div className="wrapper">
        <div className="sec-padded container">
          <div className="top-content">
            <div className="tag">{`{ Tech Stack }`}</div>
            <h2>
              Stuff I use <span>in development</span>
            </h2>
            <p>
              A well-curated collection of JavaScript libraries, third-party
              services, and integrations is integral to my development process.
              These tools are a key part of my skillset and are seamlessly
              incorporated into my daily workflow, especially in React projects
              and WordPress customizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
