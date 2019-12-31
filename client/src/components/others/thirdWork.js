import React, { Component } from 'react';

class ThirdWork extends Component {
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
        <h5>Jan 2015 – Dec 2015</h5>
        <div className="responsibility-list">
          <ul>
            <li>
              Developed a complete End-to-End automated test suit with Python
            </li>
            <li>
              Developed a complete Functional automated test suit with Python
              and Selenium
            </li>
            <li>
              Developing, monitoring, testing, debugging and reporting were the
              key responsibilities
            </li>
            <li>Wrote test cases and scenarios for a huge platform</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ThirdWork;
