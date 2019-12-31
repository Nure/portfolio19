import React, { Component } from 'react';
import NPS from '../../images/nps.png';
import '../../css/project3.css';

class Project3 extends Component {
  render() {
    return (
      <div className="project-3 feature-13">
        <a
          href="https://npsresponse.herokuapp.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="featured-image"
        >
          <div>
            <img src={NPS} alt="NPS" className="nps" />
          </div>
        </a>
        <div className="right-panel">
          <h6 className="p-3-feature">Featured Project</h6>
          <h5 className="project3-title">NPS Response</h5>
          <div className="project-description3">
            <p>
              An NPS response survey Web APP for a car manufacturer to collect
              survey response for it's different dealers. It collects
              information in Database and send email to the car manufacturer.
            </p>
          </div>

          <ul className="projects3-stacks">
            <li>Python</li>
            <li>Flask</li>
            <li>Mongo DB</li>
            <li>Herokuapp</li>
          </ul>

          <div className="project3-links">
            <a
              href="https://github.com/Nure/MyProjects/tree/master/Python-projects/FlaskApp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="GitHub Link"
              className="link-document3"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://npsresponse.herokuapp.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Live Link"
              className="link-document3"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project3;
