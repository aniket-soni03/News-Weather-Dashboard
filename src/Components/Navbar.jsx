import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-left">
        <h2 id="brand">News & Weather</h2>
      </div>

      <div id="navbar-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          News
        </NavLink>
        <NavLink
          to="/weather"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          Weather
        </NavLink>
      </div>

      <div id="navbar-right">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
