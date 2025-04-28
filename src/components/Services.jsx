import React from "react";
import "../styles/Services.css";
import ServicesCard from "./ServicesCard";

const servicesContent = [
  {
    title: "<Figma to Frontend Code/>",
    description:
      "I transform Figma designs into pixel-perfect React code using Tailwind CSS. With clean and efficient implementation, I ensure responsiveness.Every detail, animation, and interaction is precisely crafted. The result is a flawless, high-performance frontend experience.",
  },
  {
    title: "<Custom JavaScript Solutions/>",
    description:
      "I develop custom JavaScript solutions to enhance functionality and interactivity. From dynamic UI components to complex logic, I build tailored features. My code is optimized for performance, scalability, and maintainability. I ensure smooth and seamless user experiences across all devices.",
  },
  {
    title: "<Custom React JS Solutions/>",
    description:
      "I craft custom React.js solutions that bring dynamic, high-performance user interfaces to life. From reusable components to complex state management, I build scalable and maintainable applications tailored to your needs. My focus is on creating smooth, responsive experiences optimized for all devices and modern web standards.",
  },
  {
    title: "<Animations (GSAP)/>",
    description:
      "I create smooth and engaging animations using GSAP for a dynamic user experience. From subtle effects to complex motion graphics, I bring interfaces to life. My animations are optimized for performance and responsiveness. Every interaction feels fluid, enhancing usability and visual appeal.",
  },
  {
    title: "<Figma to WordPress/>",
    description:
      "I convert Figma designs into fully functional and responsive WordPress websites. With clean code and custom themes, I ensure a pixel-perfect match. SEO-friendly and optimized for speed, my sites offer top performance. Every project is tailored for easy management and scalability.",
  },
  {
    title: "<WordPress Theme Customization/>",
    description:
      "I customize WordPress themes to match your brand and design needs. From layout adjustments to feature enhancements, I ensure a perfect fit. My optimizations improve performance, responsiveness, and user experience. Seamless, clean, and maintainable code keeps your site running smoothly.",
  },
  {
    title: "<Shopify Store Creation/>",
    description:
      "I build and customize Shopify stores for a seamless eCommerce experience. From theme customization to responsive design, I tailor every detail. My solutions ensure a fast, user-friendly, and visually appealing storefront. Optimized for conversions, performance, and easy management.",
  },
  {
    title: "Website Maintenance",
    description:
      "I provide ongoing website maintenance to ensure optimal performance. From updates and backups to security checks, I keep your site running smoothly. I monitor site speed, fix bugs, and ensure compatibility with the latest standards. My services ensure a secure, up-to-date, and fully functional website at all times.",
  },
];

const Services = () => {
  return (
    <section className="services-sec container bottom-padded" id="services">
      <div className="tag tag-1">{`{ Main services }`}</div>
      <div className="cards-wrapper">
        {servicesContent.map((item, index) => (
          <ServicesCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
