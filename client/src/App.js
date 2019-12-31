import React, { Component } from 'react';
import './App.css';
import MainNavbar from './components/navbar';
import LandingPage from './components/landingpage';
import About from './components/aboutme';
import Experience from './components/experience';
import Work from './components/work';
import LeftNav from './components/leftnav';
import RightNav from './components/rightnav';
import Footer from './components/footer';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div id="main-ground">
        <MainNavbar />
        <div className="container">
          <LandingPage />
          <LeftNav />
          <About />
          <Experience />
          <Work />
          <RightNav />
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
