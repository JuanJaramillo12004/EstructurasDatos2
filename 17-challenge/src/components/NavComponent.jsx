import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavComponent.css";
import logo from "../assets/react.svg";

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink to="/" className="nav-logo">
            <img src={logo} alt="logo" className="logo" /><p className="textLogo">React JS</p>
        </NavLink>
        <div className="nav-links">
          <NavLink exact to="/" activeClassName="active-link" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">
            About
          </NavLink>
          <NavLink to="/login" activeClassName="active-link" className="nav-link">
            Login
          </NavLink>
          <div className="dropdown">
            <NavLink to="/more" activeClassName="active-link" className="nav-link dropbtn">
              More
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/contact" className="nav-link-drop">
                Contact
              </NavLink>
              <NavLink to="/faq" className="nav-link-drop">
                FAQ
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;