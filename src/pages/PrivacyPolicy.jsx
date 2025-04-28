import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const navigateToHomepage = () => navigate("/");

  return (
    <>
      <section className="privacy-policy container-privacy sec-padded">
        <div className="btn-wrapper">
          <button onClick={navigateToHomepage}>Back To Homepage</button>
        </div>
        <div className="wrapper">
          <h2>Privacy Policy</h2>
          <p className="bold">Last updated: February 11, 2025</p>

          <p>
            Your privacy is important to us. This policy explains what personal
            information we collect, how we use it, and how we keep it safe when
            you use our website.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We only collect personal details when you fill out the contact form.
            This may include:
          </p>
          <ul>
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>Your selected service(s)</li>
            <li>Details from your message</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Share information about our services</li>
            <li>Understand your needs and improve our offerings</li>
          </ul>

          <h3>Sharing Your Information</h3>
          <p>
            We do not sell, rent, or share your personal information with third
            parties unless required by law or with your permission.
          </p>

          <h3>How We Protect Your Data</h3>
          <p>
            We use appropriate measures to secure your information. However,
            please note that no method of transmission or storage online can be
            guaranteed 100% secure.
          </p>

          <h3>Use of Google reCAPTCHA</h3>
          <p>
            To protect our forms from spam and abuse, we use Google reCAPTCHA
            v2, which helps us tell real users apart from bots.
          </p>

          <h3>Data Collected by reCAPTCHA</h3>
          <p>
            When you interact with a reCAPTCHA form, Google may collect
            information such as:
          </p>
          <ul>
            <li>Your IP address</li>
            <li>Browser and device details</li>
            <li>Interaction time</li>
            <li>Mouse and keyboard behavior</li>
            <li>Cookies set for reCAPTCHA purposes</li>
          </ul>

          <p>
            This information is handled according to Google's{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            .
          </p>

          <h3>Cookies Used by reCAPTCHA</h3>
          <p>
            reCAPTCHA may place cookies on your device to verify that you are a
            real user. These cookies are important for security and are managed
            by Google.
          </p>

          <h3>Your Choices</h3>
          <p>
            reCAPTCHA is necessary for securing our forms and cannot be
            disabled. If you prefer not to share your data with Google, we
            recommend not using our forms.
          </p>
          <p>
            By using our website, you agree to the use of Google reCAPTCHA as
            part of our security measures.
          </p>

          <h3>Policy Updates</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted here along with the new effective date.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
