import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Collapse from "../../Collapse/Collapse";
import TaskList from "../../Todo/TaskList/TaskList";

function About() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  return (
    <div className="about-page">
      <div className="section-head">
        <h4>
          <span>Contact Information</span>
          Fine me here
        </h4>
      </div>
      <div className="sidebar-textbox">
        <div className="contact-info">
          <div className="contact-icon">
            <FontAwesomeIcon icon="phone" />
          </div>
          <div className="contact-text">
            <h3>Phone</h3>
            <p>(+84) 0972171063</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <FontAwesomeIcon icon="envelope-open" />
          </div>
          <div className="contact-text">
            <h3>Email</h3>
            <p>builedanthu@gmail.com</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <FontAwesomeIcon icon="location-dot" />
          </div>
          <div className="contact-text">
            <h3>Address</h3>
            <p>357 Le Van Luong, Tan Quy Ward, Distric 7, HCMC</p>
          </div>
        </div>
      </div>
      <div className="section-head">
        <h4>
          <span>Portfolio</span>
          Demo
        </h4>
      </div>
      <h4>Collapse Button</h4>
      <div className="btn-collapse">
        <Collapse isCollapsed={open}>
          Now you can see the hidden content. Click again to hide ...
        </Collapse>
      </div>

      <h4>Todo List</h4>
      <TaskList />
    </div>
  );
}

export default About;
