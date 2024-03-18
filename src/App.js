import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./swords.png";
import "./App.css";
import Pills from "./components/nav_bar/nav_bar.components";
import TextContent from "./components/textContent/textContent";
import WebDevComponent from "./components/web_dev.component/web_dev.component";
import PythonDevComponent from "./components/python_dev.component/python_dev.component";
/**
 * Renders the main application component, including routing and component composition.
 *
 * @return {JSX.Element} The main application component
 */
import ContactComponent from "./components/contact.component/contact.component";

function App() {
  return (
    <Router>
      <div className="gradient-background">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Shawn McPeek - Developer</h1>
            <Pills />
            <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route exact path="/" element={<TextContent />} />
              <Route path="/webdev" element={<WebDevComponent />} />
              <Route path="/pythondev" element={<PythonDevComponent />} />
              <Route path="/contact" element={<ContactComponent />} />{" "}
              {/* Add Route for ContactComponent */}
            </Routes>
            <div1>© Shawn McPeek 2024</div1>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
