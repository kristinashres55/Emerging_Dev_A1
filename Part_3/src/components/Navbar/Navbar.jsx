import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <div className="nav-menu">
        <ul>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="learn-more">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Navbar;
