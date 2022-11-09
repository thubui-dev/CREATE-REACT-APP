import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <div className="section-title">
        <div className="main-title">
          <div className="title-main-page">
            <h4>RESUME</h4>
            <p>My Professional Resume</p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="section-head">
            <h4>
              <span>My Professional</span>
              Work History
            </h4>
          </div>
          <div className="main-timeline">
            <div className="timeline">
              <div className="timeline-icon">
                <img
                  src="https://www.elmanawy.info/demo/mulan-cms/cdn/resume/4.png"
                  alt="Microsoft"
                />
              </div>
              <div className="timeline-content">
                <span className="date">Nov 2021- Jun 2022</span>
                <h5 className="title">
                  Senior Officer -
                  <span className="sub-title">Shinhan Bank Vietnam</span>
                </h5>
                <p className="description">
                  <ul>
                    <li>Remittance transaction</li>
                    <li>Credit inward domestics Citad and VCB</li>
                    <li>Receive tracing from Citad and VCB</li>
                    <li>Refund Citad </li>
                    <li>Relay transactions (Booking, tracing, refund)</li>
                    <li>Import VCB money</li>
                    <li>OFAC Scanning and Blacklist checked</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-second">
              <div className="timeline-icon-second">
                <img
                  src="https://www.elmanawy.info/demo/mulan-cms/cdn/resume/3.png"
                  alt="Apple"
                />
              </div>
              <div className="timeline-content-second">
                <span className="date">Sep 2017- Mar 2021</span>
                <h5 className="title">
                  Staff Officer - (SBSO) -
                  <span className="sub-title">Techcombank Vietnam</span>
                </h5>
                <p className="description">
                  <ul>
                    <li>Customer Service Management and Trade Financial</li>
                    <li>
                      Perform credit analysis to prepare Credit Application
                    </li>
                    <li>Prepare agreements & credit-related documents</li>
                    <li>
                      Control the Maturity of Credit Applications & Rating
                      Applications
                    </li>
                    <li>
                      Support RMs in handling customer's inquiry regarding
                      documentary issues
                    </li>
                    <li>Prepare internal & external credit-related reports</li>
                    <li>
                      Other related duties as assigned by Supervisor and
                      Department Head
                    </li>
                    <li>Process Import & Export L/C Bills transactions</li>
                    <li>FX transactions</li>
                    <li>Remittance transactions</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* <-- BACKGROUND --> */}
          <div className="section-head">
            <h4>
              <span>My Education/ Courses</span>
              Background History
            </h4>
          </div>
          <div className="main-timeline">
            <div className="timeline">
              <div className="timeline-content">
                <span className="date">May 2021- Dec 2021 (6 MONTHS)</span>
                <h5 className="title">
                  Front - End Developer -
                  <span className="sub-title">CYBERSOFT ACADEMY</span>
                </h5>
                <p className="description">
                  <ul>
                    <li>
                      HTML, CSS with small project: by design web KFC, web
                      e-learning
                    </li>
                    <li>
                      Javascript with small project: Oan Tu Ti Game, Booking
                      Movie
                    </li>
                    <li>
                      React js : Booking Movie for client and Admin, use redux,
                      axios for call API from backend
                    </li>
                    <li>Angular : E-learning for user </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-second">
              <div className="timeline-content-second">
                <span className="date">Oct 2010- Sep 2014</span>
                <h5 className="title">
                  Bachelor of Business-
                  <span className="sub-title">HUTECH</span>
                </h5>
                <p className="description">
                  <ul>
                    <li>Financial Accounting</li>
                    <li>Banking</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* <-- SKILLS --> */}
          <div className="block-skills">
            <div className="row-list-skills">
              <div className="col-left">
                <div className="block-list-skill">
                  <div className="section-head">
                    <h4>
                      <span>My Professional</span>
                      Technical Skills
                    </h4>
                  </div>
                  <ul className="skill-items">
                    <li>
                      Programming Languages: Javascript, Typescript, HTML, CSS
                    </li>
                    <li>Frameworks/Platforms: ReactJS, Redux, JQuery,ES6</li>
                    <li>Version Control: GitHub</li>
                    <li>Testing tool: Storybook</li>
                  </ul>
                </div>
              </div>
              <div className="col-right">
                <div className="block-list-skill">
                  <div className="section-head">
                    <h4>
                      <span>My Professional</span>
                      Work Skills
                    </h4>
                  </div>
                  <ul className="skill-items">
                    <li>
                      Soft skills: Teamwork, Analytical problem solving,
                      presentation, statistics and reporting, ability to work
                      under pressure.
                    </li>
                    <li>Languages: English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <--- REFFERENCE ---> */}
          <div className="section-head">
            <h4>
              <span>What Actually I Do</span>
              My projects
            </h4>
            <div className="sub-refer">
              <p className="description">
                <h5>Exercise: Booking Movie</h5>
                <ul>
                  <li>
                    Technical used: React Js, Redux, Material UI, Bootstrap
                  </li>
                  <li>Communicate with backend to handle api: Axios, Redux</li>
                  <li>
                    The user can log-in, register, view movie detail and book
                    ticket
                  </li>
                  <li>
                    The admin (dashboard page) can management web movie as add
                    new films list, edit, delete, management on time and
                    schedule of films
                  </li>
                </ul>
              </p>
              <p className="description">
                <h5>Final project: Jira project</h5>
                <ul>
                  <li>
                    Technical used: React Js, Redux, Material UI, Bootstrap,
                    Ant-design
                  </li>
                  <li>Communicate with backend to handle api: Axios, Redux</li>
                  <li>
                    Jira project to coordinate the development of a product,
                    track a project, manage a help desk and more depending on
                    your requirements, increase transparency and maximize
                    output.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
