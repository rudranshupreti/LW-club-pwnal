import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/logo.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
          {/* Logo Section */}
          <div className="logo">
        <img src={logo}
        className="logoImage" />
        <h2 className="logoText">LawWheels.club</h2>
      </div>

      {/* Navigation Section */}
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/dashboard" className="navLink" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/user-management" className="navLink" activeClassName="active">
              User Management
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/advocate-management" className="navLink" activeClassName="active">
              Advocate Management
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/consultation-management" className="navLink" activeClassName="active">
              Consultation Management
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/settings" className="navLink" activeClassName="active">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
