import React, { Component } from 'react';
import '../css/aboutme.css';
import myImage from '../images/main-image.png';

class About extends Component {
  render() {
    return (
      <div id="about" className="about-container">
        <h3 className="main-title">
          <span style={{ color: '#64ffda', fontWeight: 'bold' }}>About</span> Me
        </h3>
        <div className="body-container">
          <div className="container-left item">
            <p>
              I'm a software engineer based in Dhaka, Bangladesh who is
              passionate about building things that live on the internet. I
              build websites and webapps that provide great user experience with
              efficient and cutting edge backend technologies.
            </p>
            <p>
              After graduating from&nbsp;
              <a
                href="https://juniv.edu"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className='about-inline'
              >
              Jahangirnagar University
              </a>
              , I startred my career at <strong><em>ServicEngine</em></strong> where I work on a
              wide variety of interesting and meaningful projects.
            </p>
            <p>Here are a few tech stacks I've been working with recently:</p>
            <ul className="container-about-kills">
              <li className="about-skills">HTML & (S)CSS</li>
              <li className="about-skills">JavaScript (ES6)</li>
              <li className="about-skills">React</li>
              <li className="about-skills">Node.js</li>
              <li className="about-skills">Express</li>
              <li className="about-skills">MongoDB</li>
              <li className="about-skills">MySQL</li>
              <li className="about-skills">Python</li>
              <li className="about-skills">Django</li>
              <li className="about-skills">Flask</li>
            </ul>
          </div>
          <div className="container-right item">
            <div className="home-image">
              <img src={myImage} alt="Avatar" />
            </div>
            <div className="philosophy">
              <h4>Philosophy</h4>
              <p>
                &nbsp;&nbsp;"I never fail,
                <br />
                &nbsp; &nbsp;&nbsp;Either I gain or I learn"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
