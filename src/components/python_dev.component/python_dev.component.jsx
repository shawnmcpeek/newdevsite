import React, { useState } from "react";
import "./python_dev.component.css";

const PythonDevComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Python Simple Calculator",
      description:
        "This is a simple calculator implemented in Python. It has basic calculator functionality such as addition, subtraction, multiplication, and division.",
      script:
        "print('Hello, Python!')\nnum1 = 5\nnum2 = 10\nprint(num1 + num2)\n",
    },
    // Add more projects to the array...
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="python-dev-container">
      <h2>Python Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div
            className={`project-card ${
              selectedProject && selectedProject.id === project.id && "selected"
            }`}
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="popup">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <div className="code-container">
            <pre>{selectedProject.script}</pre>
          </div>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PythonDevComponent;
