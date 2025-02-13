import React, { useState } from "react";

const Project = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`project ${isActive ? "active" : ""}`}>
      <div className="wrapper">
        <div className="project-top" onClick={() => setIsActive(!isActive)}>
          <div className="top-wrapper">
            <div className="left">
              <img
                src="src/assets/images/project-arrow.svg"
                alt="Project Arrow"
              />
              <p>{project.projectName}</p>
            </div>
            <div className="right">
              <div className="tech-wrapper">
                {project.tech.map((item, index) => (
                  <div key={index} className="tech-used">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="project-bottom">
          <div className="project-content">
            <img src={project.imageURL} alt={project.projectName} />
            <div className="project-description">
              <p>{project.description}</p>
              <div className="link">
                <a href={project.projectLink}>
                  <p>See live</p>
                  <img
                    src="src/assets/images/live-arrow.svg"
                    alt="Live Arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
