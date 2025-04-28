import React from "react";
import Tilt from "react-parallax-tilt";

const ServicesCard = ({ title, description }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.02}
      transitionSpeed={2000}
      glareEnable={true}
      perspective={2000}
      gyroscope={true}
      className="services-card"
    >
      <div className="bg-image">
        <img
          src="src/assets/images/purple-lines-bg.svg"
          alt="Lines Background"
        />
      </div>
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
