import React, { useState, useEffect } from "react";
import "./python_dev.component.scss";
import projects from "./projectData";

const PythonDevComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      const scriptElement = document.createElement("script");
      scriptElement.src = selectedProject.script; // Use the script URL directly
      scriptElement.onload = () => {
        // You might need additional setup here depending on your Pyscript setup
      };
      document.body.appendChild(scriptElement);
    }
  }, [selectedProject]);

  return (
    <div className="python-dev-container">
      <h2>Python Projects</h2>
      <h3>Coming soon! Working on the back end.</h3>
      <div className="project-list">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="popup">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <div id="output"></div>
          {/* No need for BrythonRunner, just execute the script directly */}
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PythonDevComponent;
