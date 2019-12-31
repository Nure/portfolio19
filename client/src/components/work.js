import React, { Component } from 'react';
import Project1 from './others/project1';
import Project2 from './others/project2';
import Project3 from './others/project3';
import OtherProjects from './others/otherProjects';
import '../css/work.css';

class Work extends Component {
  render() {
    return (
      <div id="work" className="project-container">
        <h3 className="main-title-project">
          <span style={{ color: '#64ffda', fontWeight: 'bold' }}> Some</span> of
          My Works
        </h3>
        <Project1 />
        <Project2 />
        <Project3 />
        <h4 id="other-heading">Other Projects I've Built</h4>
        <h6 className="other-heading-slogan">check these out</h6>
        <div className="list-projects">
          <OtherProjects
            gitLink="https://github.com/Nure/MyProjects/tree/master/HTML-CSS/Flexbox%20website"
            liveLink="http://nure.flexbox-web.surge.sh/"
            title="Flexbox: Website for a financial organization"
            description="A pet project completely bult with Flexbox technology to show how flexbox works in different sections."
            stacks1="HTML"
            stacks2="Flexbox"
            stacks3="Surge"
          />
          <OtherProjects
            gitLink="https://github.com/Nure/MyProjects/tree/master/HTML-CSS/Raw%20html-css%20website/HOTEL%20Website"
            liveLink="http://nure-hbd.surge.sh"
            title="HOTEL Website"
            description="Static hotel website completely built with raw HTML and CSS to represent different sections on the website"
            stacks1="HTML"
            stacks2="CSS"
            stacks3="Surge"
          />
          <OtherProjects
            gitLink="https://github.com/Nure/MyProjects/tree/master/HTML-CSS/Parallax%20website"
            liveLink="http://nure.parallax-web.surge.sh/"
            title="Parallax website"
            description="Parallax effect has been applied for a sports car company where website layout sees the background of the web page moving at a slower rate to the foreground"
            stacks1="HTMl"
            stacks2="CSS"
            stacks3="Surge"
          />
          <OtherProjects
            title="hello"
            description="dsbadsjfbdsbfd skjbf sdfvdv fsfgnvdk svbkdf jlsbgvkld fjsbvjakd fbvjlkd skjfvdskv bdskjvbdsj;kv"
            stacks1="hoho"
            stacks2="jojo"
            stacks3="jojo"
          />
          <OtherProjects
            title="hello"
            description="dsbadsjfbdsbfd skjbf sdfvdv fsfgnvdk svbkdf jlsbgvkld fjsbvjakd fbvjlkd skjfvdskv bdskjvbdsj;kv"
            stacks1="hoho"
            stacks2="jojo"
            stacks3="jojo"
          />
        </div>
      </div>
    );
  }
}

export default Work;
