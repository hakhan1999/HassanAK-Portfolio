import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
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
    <section className="hero-sec cursor-sec" id="hero">
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <div className="cursor-1"></div>
        <div className="cursor-2"></div>
      </div>

      <div className="bg-image">
        <img src="src/assets/images/hero-bg.svg" alt="Lines Background" />
      </div>

      <div className="content container">
        <div className="floating-image">
          <img src="src/assets/images/pc-floating.webp" alt="Floating PC" />
        </div>
        <h1>
          <span className="top scramble-text">Hassan</span>
          <span className="middle scramble-text">Creative</span>
          <span className="bottom scramble-text">Developer</span>
        </h1>
        <div className="tag tag-1">{`{ Welcome to my site }`}</div>
        <div className="tag tag-2">{`{ Front-End Developer }`}</div>
        <div className="tag tag-3">{`{ Creative Development }`}</div>
        <div className="tag tag-4">{`{ JavaScript, React and GSAP }`}</div>
        <div className="tag tag-5">{`{ Portfolio ‘25 }`}</div>
        <div className="copyright">
          HASSAN AHMED KHAN © 2025 | ALL RIGHTS RESERVED
        </div>
      </div>
    </section>
  );
};

export default Hero;
