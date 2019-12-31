import React, { Component } from 'react'
import Jamming from '../../images/jamming.jpg';
import '../../css/project1.css'

class Project1 extends Component {
  render() {
    return (
      <div className="project-1 feature-1">
        <a
          href="http://nure.surge.sh/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="featured-image"
        >
          <div>
            <img src={Jamming} alt="jamming" className="jamming" />
          </div>
        </a>
        <div className="right-panel">
          <h6 className="p-1-feature">Featured Project</h6>
          <h5 className="project1-title">Jamming</h5>
          <div className="project-description1">
            <p>
              A Music Web App where you can search and play music by title,
              artist and album from Spotify. You also can create playlists. It
              uses Spotify Web API to fetch song from Spotify and create
              playlist in Spotify.
            </p>
          </div>

          <ul className="projects1-stacks">
            <li>React</li>
            <li>Node.js</li>
            <li>Surge.sh</li>
            <li>Spotify Web API</li>
          </ul>

          <div className="project1-links">
            <a
              href="https://github.com/Nure/jamming"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="GitHub Link"
              className="link-document1"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="http://nure.surge.sh"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Live Link"
              className="link-document1"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project1;