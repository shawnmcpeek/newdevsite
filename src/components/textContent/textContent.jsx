import React from "react";
import "./textContent.css"; // Import the CSS file

const TextContent = () => {
  return (
    <div className="text-content">
      <div className="left-column">
        <p>
          Welcome to the home of Shawn McPeek, a web developer with experience
          in JavaScript, HTML, React, and CSS. He has also worked on various
          projects in Python. Navigate to the Links page to view websites
          designed and built by Shawn or visit the Projects page to explore and
          download completed projects.
        </p>
      </div>
      <div className="right-column">
        <span className="left-align">
          Shawn McPeek has completed the following programs:
        </span>
        <ul className="a">
          <li>Zero to Mastery:</li>
          <li className="double-indented">
            Complete Python Developer in 2023/24
          </li>
          <li className="double-indented">Complete Web Developer in 2023/24</li>
          <li className="double-indented">
            Complete React Developer in 2024 (w/ Redux, Hooks, GraphQL): Zero to
            Mastery
          </li>
          <li className="double-indented">
            Python for Business Data Analytics & Intelligence
          </li>
          <li>Mimo: Introduction to Programming Using Python</li>
          <li>Coursera: Crash Course on Python</li>
        </ul>
      </div>
    </div>
  );
};

export default TextContent;
