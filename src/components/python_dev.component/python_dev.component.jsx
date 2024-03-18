import React, { useState, useEffect } from "react";
import "./python_dev.component.css";
import projects from "./projectData";

const PythonDevComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const runScript = (script) => {
    // Execute the script using Brython
    window.BrythonRunner.runScript(script);
  };

  useEffect(() => {
    if (selectedProject) {
      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://cdn.jsdelivr.net/npm/brython@3/brython.min.js"; // Brython CDN URL
      scriptElement.onload = () => {
        window.BrythonRunner = {
          runScript: (script) => {
            window.__BRYTHON__.run_script(script);
          },
        };
      };
      document.body.appendChild(scriptElement);
    }
  }, [selectedProject]);

  return (
    <div className="python-dev-container">
      <h2>Python Projects</h2>
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
          <button onClick={() => runScript(selectedProject.script)}>
            Run Script
          </button>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PythonDevComponent;
