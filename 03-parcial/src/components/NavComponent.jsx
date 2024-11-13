import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavComponent.css";

const NavComponent = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/pokemon" className="nav-link">
          Pokedex
        </Link>
        <Link to="/todo" className="nav-link">
          To Do
        </Link>
      </div>
    </nav>
  );
};

export default NavComponent;
