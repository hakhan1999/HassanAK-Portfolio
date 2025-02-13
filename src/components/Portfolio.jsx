import React from "react";
import "../styles/Portfolio.css";
import Project from "./Project";

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
    </section>
  );
};

export default Portfolio;
