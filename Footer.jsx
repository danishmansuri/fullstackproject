// import React from "react";
import "../styles/footer.css";
import instagram from "../assets/Group.svg";
import twitter from "../assets/Group-1.svg";
import facebook from "../assets/Frame.svg";
import linkedin from "../assets/Linkedin.svg";
import logo from "../assets/logo (1).svg";
const Footer = () => {
  return (
    <section>
      <div className="custom-ui">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>
              Learn more about our listing process, as well as our additional
              staging and design work.
            </h1>
            <button className="hero-button">Learn More</button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="navbar footer-nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="subscribe-container">
            <span>Subscribe Us</span>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </nav>

        {/* Footer */}
        <footer className="footer">
          <p>All Rights Reserved © 2023</p>
          <div className="footer-icon">
            <img className="footer-logo" src={logo} alt="" />
          </div>
          <div className="social-icons">
            <div className="twitter-icon">
              <img className="twitter" src={twitter} alt="" />
            </div>
            <div className="facebook-icon">
              <img className="facebook" src={facebook} alt="" />
            </div>
            <div className="linkedin-icon">
              <img className="linkedin" src={linkedin} alt="" />
            </div>
            <div className="instagram-icon">
              <img className="instagram" src={instagram} alt="" />
            </div>

            {/* <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i> */}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
