// import React from "react";
import "../styles/aboutus.css"; // Add the CSS here
import leftsideimg from "../assets/pexels-brett-sayles-2881232.svg";
import rightsideimg from "../assets/pexels-fauxels-3182834.svg";
import centreimg from "../assets/pexels-andres-ayrton-6578391.svg";
import Project from "./Project";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-us-section">
        <div className="image-container">
          <div className="left-image">
            <img src={leftsideimg} alt="Left Image" />
          </div>
          <div className="center-image">
            <img src={centreimg} alt="Center Image" />
          </div>
          <div className="right-image">
            <img src={rightsideimg} alt="Right Image" />
          </div>
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Fifteen years of experience in real estate, excellent customer
            service, and a commitment to work hard, listen, and follow through.
            We provide quality services to build relationships with clients and,
            more importantly, maintain those relationships by communicating
            effectively.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <Project />
    </div>
  );
};

export default AboutUs;
