import React, { Component } from 'react';
import '../css/experience.css';
import '../css/experience-list.css';
import LatestWork from './others/latestWork';
import ThirdWork from './others/thirdWork';
import SecondWork from './others/secondWork';
import FirstWork from './others/firstWork';
export default class experience extends Component {
  state = {
    showInfo: 'latest', 
    // newClass: 'current'
  };
  render() {
    const { showInfo } = this.state;

    return (
      <div id="experience" className="experience-container">
        <h3 className="main-title-experience">
          <span style={{ color: '#64ffda', fontWeight: 'bold' }}>Work </span>
          Experience
        </h3>
        <div className="experience-list-container">
          <div className="work-container">
            <ul className="title-list-container">
              <li
                id="tab-0"
                onClick={() => this.setState({ showInfo: 'latest' })}
                className={showInfo === 'latest' ? 'current' : null}
              >
                NewsCred
              </li>
              <li
                id="tab-1"
                onClick={() => this.setState({ showInfo: 'third' })}
                className={showInfo === 'third' ? 'current' : null}
              >
                NewsCred
              </li>
              <li
                id="tab-2"
                onClick={() => this.setState({ showInfo: 'second' })}
                className={showInfo === 'second' ? 'current' : null}
              >
                NewsCred
              </li>
              <li
                id="tab-3"
                onClick={() => this.setState({ showInfo: 'first' })}
                className={showInfo === 'first' ? 'current' : null}
              >
                ServicEngine
              </li>
            </ul>
          </div>

          <div className="job-details">
            {showInfo === 'latest' ? <LatestWork /> : null}
            {showInfo === 'third' ? <ThirdWork /> : null}
            {showInfo === 'second' ? <SecondWork /> : null}
            {showInfo === 'first' ? <FirstWork /> : null}
          </div>
        </div>
      </div>
    );
  }
}
