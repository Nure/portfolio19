import React, { Component } from 'react';

class FirstWork extends Component {
  render() {
    return (
      <div className="latest-work work-header">
        <h4 className="job-title">
          <span>Senior Executive</span>
          <span className="bg-dark">
            <span>&nbsp;@&nbsp;</span>
            <a
              href="https://www.sebpo.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              ServicEngine
            </a>
          </span>
        </h4>
        <h5>Mar 2010 – Dec 2011</h5>
        <div className="responsibility-list">
          <ul>
            <li>
              Managed and stored collected information from world’s top <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content publishers to enrich risk
              relevant entity database
            </li>
            <li>
              Managed day-to-day operational aspects of particular project and
              scope
            </li>
            <li>
              Ensured project contents are complete and stored appropriately
            </li>
            <li>Checked quality of the works of a huge team</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FirstWork;
