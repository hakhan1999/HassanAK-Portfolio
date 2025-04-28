import React from "react";
import Tilt from "react-parallax-tilt";

const Testimonial = ({ reviewLong, reviewShort, name, tech }) => {
  return (
    <div className="testimonial">
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.02}
        transitionSpeed={2000}
        glareEnable={false}
        perspective={2000}
        gyroscope={true}
        className="left-col"
      >
        <div className="card">
          <p>{reviewLong}</p>
        </div>
        <div className="arrow">
          <img
            src="src/assets/images/testimonial-arrow.svg"
            alt="Testimonial Arrow"
          />
        </div>
      </Tilt>
      <div className="right-col">
        <div className="top-quote">“</div>
        <h3>{reviewShort}</h3>
        <div className="bottom-testimonial">
          <h4>{name}</h4>
          <p>{tech}</p>
        </div>
        <div className="bottom-quote">”</div>
      </div>
    </div>
  );
};

export default Testimonial;
