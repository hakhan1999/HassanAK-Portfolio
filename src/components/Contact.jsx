import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [selectedServices, setSelectedServices] = useState([]);
  // Recaptcha State
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Recaptcha Handler
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((service) => service !== value)
    );
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message || selectedServices.length === 0) {
      setStatusMessage(
        "Please fill in all required fields and select at least one service."
      );
      setStatusType("error");
      return;
    }

    // Captcha Validation
    if (!recaptchaValue) {
      setStatusMessage("Please complete the reCAPTCHA.");
      setStatusType("error");
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage("Message sent successfully!");
      setStatusType("success");
      form.current.reset();
      setSelectedServices([]);
      setRecaptchaValue(null); // Reset reCAPTCHA state after sending
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
      setStatusType("error");
    }
  };

  return (
    <section className="contact-sec container bottom-padded" id="contact">
      <div className="wrapper">
        <div className="content-col">
          <h2>Let's Work</h2>
          {[...Array(6)].map((_, index) => (
            <h2 key={index} className="masked">
              together..
            </h2>
          ))}
        </div>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.02}
          transitionSpeed={2000}
          glareEnable={true}
          perspective={5000}
          gyroscope={true}
          className="form-col"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-wrapper">
              <div className="form-row twoCol">
                <div className="input">
                  <label>Name*</label>
                  <input type="text" name="name" required />
                </div>
                <div className="input">
                  <label>Email*</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <label>What do you need?*</label>
                <div className="checkboxes-wrapper">
                  {[
                    "Website Development",
                    "WordPress Development",
                    "Animations",
                    "Bug Fix",
                    "Website Maintenance",
                    "Figma to Code",
                    "Integrations",
                    "Other",
                  ].map((service, index) => (
                    <label className="checkbox" key={index}>
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label>Tell me about your project*</label>
                <textarea
                  className="textArea"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <p>
                  By submitting this form, you agree to our{" "}
                  <Link to="/privacy-policy/">Privacy Policy.</Link>
                </p>
              </div>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
              <div className="form-row submit">
                <input type="submit" value="Send" />
              </div>
              {statusMessage && (
                <p className={`status-message ${statusType}`}>
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </Tilt>
      </div>
    </section>
  );
};

export default Contact;
