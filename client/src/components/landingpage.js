import React, { Component } from 'react';
import TypicalAnimation from './typical';
import '../css/landing-page.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <TypicalAnimation />
        <h2 className='heading-1'>Nure Alam Siddiq.</h2>
        <h3 className='heading-2'>I build things for the web.</h3>
        <p>
          I'm a software engineer based in Dhaka, Bangladesh. I specializ
          <br />
          in building high-quality websites and web applications with cutting
          <br />
          edge technologies.
        </p>

        <a
          href="mailto:me@nuresiddiq.com"
          rel="noopener noreferrer"
          className="button-contact"
        >
          Get In Touch
        </a>
      </div>
    );
  }
}

export default LandingPage;
