import React from "react";
const PopupProjectsContent = [
  {
    id: "1",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "2",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "3",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "4",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "5",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "6",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "7",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "8",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "9",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "10",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "11",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "12",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "13",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "14",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
  {
    id: "15",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    projectLink: "#",
  },
];

const Popup = ({ isActive, onClose }) => {
  return (
    <div className={`portfolio-popup ${isActive ? "active" : ""}`}>
      <div className="wrapper">
        <div className="btn-wrapper">
          <button onClick={onClose}>Close</button>
        </div>
        {PopupProjectsContent.map((project) => (
          <div key={project.id} className="project">
            <div className="wrapper">
              <div className="project-top">
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
        ))}
      </div>
    </div>
  );
};

export default Popup;
