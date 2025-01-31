import React, { useState } from "react";

const ServicesCard = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      onClick={toggleClass}
      className={`services-card ${isActive ? "active" : ""}`}
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
    </div>
  );
};

export default ServicesCard;
