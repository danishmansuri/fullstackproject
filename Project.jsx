import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "../styles/project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientList from "./ClientList";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024, // Below 1024px screen width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Below 600px screen width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="our-project">
        <div className="project-heading">
          <h1>Our Projects</h1>
          <p>
            We know what buyers are looking for and suggest projects that will
            bring top value for their homes.
          </p>
        </div>
        <Slider {...sliderSettings} className="project-slider">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <img
                src={`http://localhost:4000/${project.image}`}
                alt={project.name}
                className="project-image"
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </Slider>
        <ClientList />
      </div>
    </section>
  );
};

export default Project;
