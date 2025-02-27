import React from "react";
import Testimonial from "./Testimonial";
import '../styles/RealTalk.css'

const testimonialsContent = [
  {
    reviewLong:
      "Hassan worked quickly, openly, and expertly. He was patient, adaptable, and courteous throughout the process, and he handled the milestones and communication effectively, despite the fact that it took longer than anticipated on our end. To anyone searching for a fantastic Frontend Developer, I would heartily recommend him.",
    reviewShort: "Fast, transparent and skillful",
    name: "James K. / United Kingdom",
    tech: "<React />",
  },
  {
    reviewLong:
      "Hassan provided the relatively small updates I needed for my company WordPress website. Fast communication, excellent work, and no hassles. page speed and SEO optimization for the website. Hassan quickly resolved issues. will rehire for further development projects.",
    reviewShort: "High quality work, hassle-free",
    name: "Christian Bosch / USA",
    tech: "<WordPress Development />",
  },
  {
    reviewLong:
      "I had an excellent working relationship with Hassan, a talented developer. Hassan exceeded my expectations and found solutions to issues I never even realized would come up. He provided insightful advice and was able to finish things that other experts were unable to.",
    reviewShort: "Complete tasks other couldn't",
    name: "Sheikh Ahmed / UAE",
    tech: "<Javascript />",
  },
];

const RealTalk = () => {
  return (
    <section className="real-talk-sec container bottom-padded" id="real-talk">
      <div className="wrapper">
        <div className="tag">{`{ Happy Clients Hub }`}</div>
        <div className="testimonials-wrapper">
          {testimonialsContent.map((item, index) => (
            <Testimonial
              key={index}
              reviewLong={item.reviewLong}
              reviewShort={item.reviewShort}
              name={item.name}
              tech={item.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealTalk;
