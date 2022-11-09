import React from "react";
import ROUTES from "../../../routes";
import { NavLink } from "react-router-dom";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  return (
    <div className="menu-bar">
      <NavLink to={ROUTES.home} activeClassName="selected" className="sub-page">
        <span className="icon">
          <FontAwesomeIcon icon="home" />
        </span>
        Home
      </NavLink>

      <NavLink
        to={ROUTES.about}
        activeClassName="selected"
        className="sub-page"
      >
        <span className="icon">
          <FontAwesomeIcon icon="user" />
        </span>
        About Me
      </NavLink>

      <NavLink
        to={ROUTES.resume}
        activeClassName="selected"
        className="sub-page"
      >
        <span className="icon">
          <FontAwesomeIcon icon="id-card" />
        </span>
        Resume
      </NavLink>
    </div>
  );
}

export default Menu;
