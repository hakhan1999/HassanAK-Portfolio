import { useState, useEffect } from "react";
import "../styles/Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Karachi",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const [hours, minutes] = formatTime(time).split(/[: ]/);

  return (
    <section className="clock-sec container bottom-padded">
      <div className="wrapper">
        <div className="tag">{`{ Available In }`}</div>
        <div className="top-grid">
          <h4>Pakistan</h4>
          <h4>ASAP</h4>
          <h4>Remote</h4>
        </div>
        <div className="clock">
          <div className="clock-wrapper">
            <span>{hours}</span>
            <span className="blinking-colon">:</span>
            <span>{minutes}</span>
            <div className="tag">{`{ GMT +5, PKT }`}</div>
          </div>
        </div>
        <div className="bottom-text">
          <h4>I am Looking forward to know more about your project!</h4>
        </div>
      </div>
    </section>
  );
};

export default Clock;
