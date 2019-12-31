import React, { Component } from 'react'
import '../../css/other-projects.css';

class otherProjects extends Component {
  render() {
    const { title, description, gitLink, liveLink, stacks1, stacks2, stacks3, stacks4 } = this.props;
  
    return (
      <div className="other-projects">
        <div className="project-other-container">
          <header>
            <div className="other-header-container">
              <div className="projects-header-left">
                <i className="fa fa-book" aria-hidden="true"></i>
              </div>
              <div className="projects-header-right-link">
                <a
                  href={gitLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <h5 className="other-project-title">{title}</h5>
            <div className="other-project-description">
              <p>{description}</p>
            </div>
          </header>
          <footer>
            <ul className="footer-project-stacks">
              <li>{stacks1}</li>
              <li>{stacks2}</li>
              <li>{stacks3}</li>
              <li>{stacks4}</li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default otherProjects;