import React, { useState } from "react";
import "../styles/Portfolio.css";
import Project from "./Project";
import Popup from "./Popup";

const projectsContent = [
  {
    id: "1",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "2",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "3",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "4",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "5",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "6",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
  {
    id: "7",
    projectName: "DXD Events",
    tech: ["XD to Webflow", "GSAP Animations", "2023"],
    description:
      "Development of DXD Events website to translates the client’s vision into reality: a streamlined interface for event showcases, with an unique brand’s signature. Design by shelbydesign.co",
    imageURL: "src/assets/images/project-img.webp",
    projectLink: "#",
  },
];

const Portfolio = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleMoreProjectsClick = () => {
    setIsPopupActive(true);
  };

  const handlePopupClose = () => {
    setIsPopupActive(false);
  };

  return (
    <section className="portfolio-sec container sec-padded" id="#portfolio">
      <div className="tag">{`{ Portfolio }`}</div>
      <h2>
        Here are <span>my projects</span>
      </h2>
      <div className="projects-wrapper">
        {projectsContent.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
      <div className="btn-wrapper">
        <button onClick={handleMoreProjectsClick}>More Projects</button>
      </div>
      <Popup isActive={isPopupActive} onClose={handlePopupClose} />
    </section>
  );
};

export default Portfolio;
