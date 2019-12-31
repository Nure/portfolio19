import React, { Component } from 'react';

class SecondWork extends Component {
  render() {
    return (
      <div className="latest-work work-header">
        <h4 className="job-title">
          <span>Senior Content Analyst</span>
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
        <h5>Jan 2012 – Dec 2014</h5>
        <div className="responsibility-list">
          <ul>
            <li>Acted as Interim Content Manager and managed a team</li>
            <li>Maintained NewsCred Topics and Source Database</li>
            <li>Set up keywords to fetch data from AWS through API</li>
            <li>Set up CMS modules and APIs</li>
            <li>
              Maintained content distribution process in different
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;distribution channels
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SecondWork;
