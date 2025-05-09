import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Numbers.css";

const numbersContent = [
  {
    id: "1",
    symbol: "+",
    number: "60",
    title: "Completed Projects",
    paragraph:
      "More than 60+ projects completed in my professional and between the top rated freelancers in the field",
  },
  {
    id: "2",
    symbol: "%",
    number: "100",
    title: "Satisfaction Rate",
    paragraph:
      "Proud of strong ties with clients built on great talks and top work - every effort paid off",
  },
  {
    id: "3",
    symbol: "+",
    number: "04",
    title: "years of experience",
    paragraph:
      "Over 4 years of indusrty experience, mastering skill sets and delivering top-notch work consistently",
  },
];
const Numbers = () => {
  return (
    <section className="numbers-sec container sec-padded">
      <div className="tag ">{`{ some cool numbers }`}</div>
      <div className="wrapper">
        {numbersContent.map((item, index) => (
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.02}
            transitionSpeed={2000}
            glareEnable={true}
            perspective={2000}
            gyroscope={true}
            key={index}
            className={`number-card card-${item.id}`}
          >
            <div className="symbol">{item.symbol}</div>
            <div className="number">{item.number}</div>
            <div className="title">{item.title}</div>
            <p className="paragraph">{item.paragraph}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
