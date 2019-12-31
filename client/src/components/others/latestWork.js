import React, { Component } from 'react';

class LatestWork extends Component {
  render() {
    return (
      <div className="latest-work work-header">
        <h4 className="job-title">
          <span>Software Engineer</span>
          <span className="bg-dark">
            <span>&nbsp;@&nbsp;</span>
            <a
              href="https://www.newscred.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              NewsCred
            </a>
          </span>
        </h4>
        <h5>Jan 2016 – Present</h5>
        <div className="responsibility-list">
          <ul>
            <li>
              Lead a small team of 3/4 people, set quarterly goals and ensure
              theses are achieved
            </li>
            <li>Train junior engineers</li>
            <li>
              Kick-start projects, set projects timeline and deliver the
              projects in time
            </li>
            <li>
              Onboard customers, analyze customer needs and design solutions
            </li>
            <li>
              Process automation, customer data migration and data manipulation
              through API
            </li>
            <li>Code high-performance programs using different frameworks</li>
            <li>Build internal applications/tools</li>
            <li>
              Interface with clients on demand basis, providing technological
              solutions
            </li>
            <li>Work with other teams for collaboration and debugging</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LatestWork;
