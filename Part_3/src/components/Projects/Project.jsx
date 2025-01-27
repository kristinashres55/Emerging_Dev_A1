import React from "react";
import project1 from "../Assets/images/project-image1.png";
import project2 from "../Assets/images/project-image2.png";
import project3 from "../Assets/images/project-image3.png";
import project4 from "../Assets/images/project-image4.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "A responsive admin panel designed for managing SecureSlate’s services which enables administrators to oversee identity management.",
      image: project1,
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "The platform effectively communicates SecureSlate’s innovative solutions, including passwordless authentication and enhanced user security.",
      image: project2,
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "A visually appealing website created for Fly Nepal Travels which highlights travel packages, flight booking services, and adventure opportunities.",
      image: project3,
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "A modern, responsive website designed for SecureSlate, a cybersecurity company specializing in identity management and risk mitigation.",
      image: project4,
    },
  ];
  return (
    <div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-container">
          {projects.map((project) => {
            return (
              <div key={project.id} className="project-item">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button>View Project</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
