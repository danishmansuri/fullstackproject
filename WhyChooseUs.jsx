// import React from "react";
import "../styles/whychooseus.css"; // CSS for styling
import AboutUs from "./Aboutus";
import home from "../assets/home.svg";
import paintbrush from "../assets/paintbrush-2.svg";
import marketing from "../assets/circle-dollar-sign.svg";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <img src={home} />,
      title: "Potential ROI",
      description:
        "Whether you are looking to buy a fixer-upper or renovate your current home for resale, we will walk you through potential return for projects.",
    },
    {
      icon: <img src={paintbrush} />, // Replace with an appropriate icon or image
      title: "Design",
      description:
        "Our designers and in-house design team will guide you through your design options and assist selecting contractors to complete the home upgrades.",
    },
    {
      icon: <img src={marketing} />, // Replace with an appropriate icon or image
      title: "Marketing",
      description:
        "Staging your home, refreshed interiors, and a sophisticated digital marketing plan accompany every listing to match today’s buyers.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-heading">Why Choose Us?</h2>
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
    </section>
  );
};

export default WhyChooseUs;
