import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ROUTES from "../../../routes";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Hello I'm Thu</h1>
      <p>I am working as Web Developer and UI/UX Designer</p>
      <p>
        I have completed the Front-End Developer course and looking for the
        right job with my experience that taking advantage of IT skills for web
        development
      </p>
      <div className="btn-contact">
        <NavLink to={ROUTES.about} activeClassName="selected">
          <button className="btnContactMe">
            <span className="icon-envelope">
              <FontAwesomeIcon icon="envelope" />
            </span>
            Contact Me
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
