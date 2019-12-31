import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../css/navbar.css';
import Logo from '../images/master-logo.png';

class MainNav extends Component {
  render() {
    return (
      <nav id="navbar">
        <a href="/" className="main-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <span style={{ color: '#64ffdaed', fontWeight: 'bold' }}>Ab</span>
            out
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
          >
            <span style={{ color: '#64ffdaed', fontWeight: 'bold' }}>Ex</span>
            perience
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={1800}
          >
            <span style={{ color: '#64ffdaed', fontWeight: 'bold' }}>Wo</span>
            rk
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={2500}
          >
            <span style={{ color: '#64ffdaed', fontWeight: 'bold' }}>Co</span>
            ntact
          </Link>
          <a
            href="http://nuresiddiq.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            <span style={{ color: '#64ffdaed', fontWeight: 'bold' }}>Re</span>
            sume
          </a>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
