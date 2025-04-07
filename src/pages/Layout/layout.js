import { faBriefcase, faHouseChimneyUser, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Intro from '../intro/intro'
import WorkEducation from '../work/workEducation';
import './layout.scss'
import Projects from "../projects/projects";

const Sidebar = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (!checked) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute("data-theme", "light")
    }
  };
  
  return (
      <nav className="sidebar">
        {/* Use anchor links to scroll to sections */}
        <a href="#intro" className="nav-link">
          <FontAwesomeIcon icon={faHouseChimneyUser} />
        </a>
        <a href="#workEducation" className="nav-link">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a href="#projects" className="nav-link">
          <FontAwesomeIcon icon={faCode} />
        </a>
        <div className="dark-mode-switch">
          <DarkModeSwitch
            style={{ marginTop: '20px' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
            sunColor="#edaa0e"
            moonColor="black"
          />
        </div>
      </nav>
  )
}

const Layout = () => {

  return (
    <>

      <Sidebar />
      <div className="content">

        {/* Add IDs to sections for scrolling */}
        <div id="intro" className="intro">
          <Intro />
        </div>
        <div id="workEducation">
          <WorkEducation />
        </div>
        <div id="projects" className="projects">
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Layout;