import { faYinYang, faHome, faUser, faPaperPlane, faCompass, faProjectDiagram, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './layout.scss'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to={'/portfolio'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink to={'/portfolio/work'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>
      <NavLink to={'/portfolio/contact'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </NavLink>
      <NavLink to={'/portfolio/track'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faCompass} className="fa-spin" />
      </NavLink>
    </nav>
  )
}

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet/>
    </>
  )
}

export default Layout;