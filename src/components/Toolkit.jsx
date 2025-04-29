import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Toolkit.css";

const techStack = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React JS",
  "Next JS",
  "Gulp JS",
  "jQuery",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Framer Motion",
  "GSAP",
  "Swiper JS",
  "Slick",
  "Splide",
  "React Router DOM",
  "React Hook Form",
  "ShadCN",
  "WordPress",
  "Shopify",
  "Woocommerce",
  "Elementor",
  "Wp Bakery",
  "Contact Form 7",
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
            <h2>Stuff I use in development</h2>
            <p>
              A well-curated collection of JavaScript libraries, third-party
              services, and integrations is integral to my development process.
              These tools are a key part of my skillset and are seamlessly
              incorporated into my daily workflow, especially in React projects
              and WordPress customizations.
            </p>
          </div>
          <ul className="techUsed">
            {techStack.map((item, index) => (
              <Tilt
                tiltMaxAngleX={50}
                tiltMaxAngleY={50}
                scale={1.02}
                transitionSpeed={5000}
                glareEnable={false}
                perspective={5000}
                gyroscope={true}
                key={index}
              >
                <li>{item}</li>
              </Tilt>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
