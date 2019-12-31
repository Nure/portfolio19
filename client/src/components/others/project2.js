import React, { Component } from 'react';
import NewsGrid from '../../images/grid-web.jpg';
import '../../css/project2.css';

class Project2 extends Component {
  render() {
    return (
      <div className="project-2 feature-2">
        <div className="left-panel">
          <h6 className="p-2-feature">Featured Project</h6>
          <h5 className="project2-title">AmfNews Grid</h5>
          <div className="project2-description">
            <p>
              A nice looking news grid website built completely with HTML & CSS
              Grid. It consists a featured section as well as different category
              top news.
            </p>
          </div>

          <ul className="projects2-stacks">
            <li>HTML</li>
            <li>CSS-grid</li>
            <li>Surge.sh</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/Nure/MyProjects/tree/master/HTML-CSS/GRID%20website/MFANews-grid"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="GitHub Link"
              className="link-document2"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="http://nure.grid-web.surge.sh/index.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Live Link"
              className="link-document2"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <a
          href="http://nure.grid-web.surge.sh/index.html"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="featured-image"
        >
          <div>
            <img src={NewsGrid} alt="newsGrid" className="amf-news" />
          </div>
        </a>
      </div>
    );
  }
}

export default Project2;
