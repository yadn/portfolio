import { faBriefcase, faGraduationCap, faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './layout.scss'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to={'/portfolio/'} end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faHouseChimneyUser} />
      </NavLink>
      <NavLink to={'/portfolio/work'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>
      <NavLink to={'/portfolio/education'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faGraduationCap} />
      </NavLink>
      {/* <NavLink to={'/portfolio/track'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FontAwesomeIcon icon={faCompass} className="fa-spin" />
      </NavLink> */}
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