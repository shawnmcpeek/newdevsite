import React, { useState } from "react";
//import CardComponent from "../card.component/card.component"; // Assuming you have a CardComponent
import projectData from "./projectdata"; // Importing project data from projectData.js
import ztmProjectData from "./ztmprojectdata"; // Importing ZTM project data from ztmprojectdata.js
import "./web_dev.component.scss";

function WebDevComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="web-dev-content">
      <div>
        <h2>Web Development Projects</h2>
        <p>
          Shawn McPeek has completed various web development projects, beside
          this current website. These sites vary in content, ranging from simple
          HTML and CSS to JavaScript and React. Please click on the links below
          to explore the projects and see the live websites.
        </p>
      </div>

      <div className="project-list">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="custom-card"
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      <div>
        <h2 className="project-heading">ZTM Projects</h2>
        <p className="project-description">
          Below are links to projects that Shawn completed alongside the Zero to
          Mastery courses.
        </p>
      </div>

      <div className="project-list">
        {ztmProjectData.map((project) => (
          <div
            key={project.id}
            className="custom-card"
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="popup">
          <div className="code-container">
            <p
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            ></p>
            <a
              href={selectedProject.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{selectedProject.buttonText}</button>
            </a>
          </div>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default WebDevComponent;
