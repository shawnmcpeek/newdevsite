import React from "react";
import CardComponent from "../card.component/card.component";
import "./web_dev.component.css";

function WebDevComponent() {
  return (
    <div className="web-dev-content">
      <h2>Web Development Projects</h2>
      <p>
        Shawn McPeek has completed various web development projects, beside this
        current website. These sites vary in content, ranging from simple HTML
        and CSS to JavaScript and React. Please click on the links below to
        explore the projects and see the live websites.
      </p>
      <div className="project-list">
        <CardComponent
          title="Knights of Columbus Council 15857"
          text="- As a member of this local council of the Knights of Columbus, Shawn and others felt that a web presence would greatly improve the visibility and draw of the council and order. Shawn set himself to the task of creating and designing a website using HTML, CSS, and JavaScript for appeal and usage."
          buttonUrl="https://github.com/smcpeek/python-learning"
          buttonText="Knights of Columbus Council 15857"
          // Add imageUrl if applicable
        />
        <CardComponent
          title="TopMath"
          text="This was an early project to redesign the <a href='https://www.topmath.info'>www.topmath.info</a> website for a friend. The original was simple HTML only. Shawn limited it to just HTML and CSS to create a more dynamic and appealing site, but as it is a very static site, it did not need the more active JavaScript."
          buttonUrl="https://topmath.netlify.app/"
          buttonText="TopMath"
          // Add imageUrl if applicable
        />
        {/* Add more CardComponents for other projects */}
      </div>

      <h2 className="project-heading">ZTM Projects</h2>
      <p className="project-description">
        Below are links to projects that Shawn completed alongside the Zero to
        Mastery courses.
      </p>
      <div className="project-list">
        <CardComponent
          title="Monsters Rolodex"
          text="This is a React project that provides a database of monsters that is searchable and will reduce visible monsters per the search terms. It utilizes an API for the monster data."
          buttonUrl="https://ztmmonsters.netlify.app/"
          buttonText="Monsters Rolodex"
          // Add imageUrl if applicable
        />
        <CardComponent
          title="Crown Clothing"
          text="This is a React project of an online clothing store. The project includes Hooks and Redux. It is a full-stack project that includes a backend and database."
          buttonUrl="https://smcrownclothing.netlify.app/"
          buttonText="Crown Clothing"
          // Add imageUrl if applicable
        />
        <CardComponent
          title="KofC Annual Survey"
          text="Part of the administrative tasks for the Knights of Columbus is to keep track of what charitable contributions and programs have been completed in a calendar year. There is currently no simple way of this data to be collected. Shawn created this React app that collects the data, stores it in a NoSQL database, and then retrieves it with the compiled data for a yearly report. Future expansions and modifications will make sure each field is required and fits the format correctly, as well as collecting and storing data for multiple councils instead of just one currently."
          buttonUrl="https://kofcannualsurvey.netlify.app/"
          buttonText="KofC Annual Survey"
          // Add imageUrl if applicable
        />
        {/* Add more CardComponents for other projects */}
      </div>
    </div>
  );
}

export default WebDevComponent;
