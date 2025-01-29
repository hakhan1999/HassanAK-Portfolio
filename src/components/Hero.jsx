import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="cursor"></div>
      <div className="bg-image">
        <img src="src/assets/images/hero-bg.svg" alt="Lines Backgroung" />
      </div>
      <div className="content container">
        <div className="floating-image">
          <img src="src/assets/images/pc-floating.webp" alt="Floating PC" />
        </div>
        <h1>
          <span className="top">Hassan</span>
          <span className="middle">Creative</span>
          <span className="bottom">Developer</span>
        </h1>
        <div className="tag tag-1">{`{ Welcome to my site }`}</div>
        <div className="tag tag-2">{`{ Front-End Developer }`}</div>
        <div className="tag tag-3">{`{ Creative Development }`}</div>
        <div className="tag tag-4">{`{ JavaScript, React and GSAP }`}</div>
        <div className="tag tag-5">{`{ Portfolio ‘25 }`}</div>
        <div className="copyright">
          HASSAN AK. - - ©2025 ALL COPYRIGHTS RESERVED - -
        </div>
      </div>
    </section>
  );
};

export default Hero;
