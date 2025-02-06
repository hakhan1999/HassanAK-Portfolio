import React, { useEffect, useState } from "react";
import "../styles/Perks.css";
import Marquee from "react-fast-marquee";

const perksTopMarquee = [
  {
    perk: "accurate",
  },
  {
    perk: "<timely/>",
  },
  {
    perk: "seamless",
  },
  {
    perk: "<high-end/>",
  },
];

const perksBottomMarquee = [
  {
    perk: "cutting edge",
  },
  {
    perk: "<features/>",
  },
  {
    perk: "user-focused",
  },
  {
    perk: "<dynamic/>",
  },
];

const cursorTexts = [
  {
    id: "blue",
    text: "🎬 animating",
    imageURL: "src/assets/images/blue-arrow.svg",
  },

  {
    id: "purple",
    text: "👋 Hassan here",
    imageURL: "src/assets/images/purple-arrow.svg",
  },
  {
    id: "navy",
    text: "💻 Responsive",
    imageURL: "src/assets/images/navy-cursor.svg",
  },
  {
    id: "grey",
    text: "⚡ Optimizing",
    imageURL: "src/assets/images/grey-arrow.svg",
  },
  {
    id: "maroon",
    text: "✨ Perfecting ✨",
    imageURL: "src/assets/images/maroon-arrow.svg",
  },
];

const Perks = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setCursorPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.1,
        y: prev.y + (targetPos.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(smoothMove);
    };

    smoothMove();
  }, [targetPos]);
  return (
    <section className="perks-sec top-padded cursor-sec" id="#perks">
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="cursor-1"></div>
        <div className="cursor-2"></div>
      </div>
      <div className="wrapper">
        <div className="bg-image">
          <img src="src/assets/images/hero-bg.svg" alt="Lines Background" />
        </div>
        <div className="marquee-sec sec-padded">
          <div className="top-marquee">
            <Marquee direction="left" speed={60}>
              {perksTopMarquee.map((item, index) => (
                <h3 key={index}>{item.perk}</h3>
              ))}
            </Marquee>
          </div>
          <div className="bottom-marquee">
            <Marquee direction="right" speed={60}>
              {perksBottomMarquee.map((item, index) => (
                <h3 key={index}>{item.perk}</h3>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="bottom-text container">
          <h4>
            I transform <span>abstract</span> concepts into solid, premium
            solutions that work as a link to your company's <span>growth</span>,
            all while adhering to <span>industry</span> standards and being
            driven by <span>accuracy</span>.
          </h4>
          {cursorTexts.map((item) => (
            <div key={item.id} className={`cursor-perks cursor-${item.id}`}>
              <div className="cursor-text">{item.text}</div>
              <img src={item.imageURL} alt={`${item.id}-arrow`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
