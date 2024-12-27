import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaGavel,
  FaComments,
  FaCogs,
} from "react-icons/fa";

import "./sidebar.css";
import logo from "../../assets/logo.jpg";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : "hidden"}`}>
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Law Wheels Logo" className="logoImage" />
          <h4 className="logoText">LawWheels.club</h4>
        </div>

        {/* Navigation Section */}
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/dashboard" className="navLink" activeClassName="active">
                <FaTachometerAlt className="icon" />
                Dashboard
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/user-management" className="navLink" activeClassName="active">
                <FaUser className="icon" />
                User Management
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/advocate-management" className="navLink" activeClassName="active">
                <FaGavel className="icon" />
                Advocate Management
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/consultation-management"
                className="navLink"
                activeClassName="active"
              >
                <FaComments className="icon" />
                Consultation Management
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/settings" className="navLink" activeClassName="active">
                <FaCogs className="icon" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
