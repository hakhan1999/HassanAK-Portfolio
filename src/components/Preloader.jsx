import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/Preloader.css";

const Preloader = ({ onFinish }) => {
  const preloaderRef = useRef();
  const numberRef = useRef();
  const lineRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("loading");

    const dummy = { value: 0 };

    const loaderTimeline = gsap.timeline({
      delay: 2, // wait before starting animations
      onComplete: () => {
        // After loading 100% complete
        const exitTimeline = gsap.timeline({
          onComplete: () => {
            document.documentElement.classList.remove("loading");
            if (onFinish) onFinish();
          },
        });

        exitTimeline
          .to(lineRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          }) // fade out line first
          .to(preloaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          }) // then fade out entire preloader
          .to(topRef.current, { y: "-100%", duration: 1, ease: "power4.in" }, 0) // slide out top
          .to(
            bottomRef.current,
            { y: "100%", duration: 1, ease: "power4.in" },
            0
          ); // slide out bottom
      },
    });

    loaderTimeline.to(dummy, {
      value: 100,
      duration: 3,
      ease: "linear",
      onUpdate: () => {
        const rounded = Math.round(dummy.value);
        setProgress(rounded);
        gsap.set(lineRef.current, { width: `${rounded}%` });
      },
    });

    return () => {
      document.documentElement.classList.remove("loading");
    };
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="wrapper">
        <div className="top" ref={topRef}>
          <h2>Loading... {progress}%</h2>
        </div>
        <div className="bottom" ref={bottomRef}>
          <h3>Heading to my universe...</h3>
          <h3>Hassan Ahmed Khan</h3>
        </div>
        <div className="loading-line" ref={lineRef}></div>
      </div>
    </div>
  );
};

export default Preloader;
