import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import "./nav_bar.components.scss";

function NavBar() {
  const [activeKey, setActiveKey] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location.pathname]);

  return (
    <div className="nav-pills flex-container" role="tablist">
      <Link
        to="/" // Update the 'to' attribute to redirect to the index route ("/")
        className={`button ${activeKey === "/" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/webdev" // Link to the WebDevComponent
        className={`button ${activeKey === "/webdev" ? "active" : ""}`}
      >
        Web Dev
      </Link>
      <Link
        to="/pythondev" // Update with the correct path for Python Dev component
        className={`button ${activeKey === "/pythondev" ? "active" : ""}`}
      >
        Python Dev
      </Link>
      <Link
        to="/contact" // Update with the correct path for the Contact component
        className={`button ${activeKey === "/contact" ? "active" : ""}`}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavBar;
