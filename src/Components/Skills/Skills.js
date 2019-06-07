import React from 'react';
import SkillsAside from './SkillsAside';
import './Skills.css';
import resume from './images/resume2019.pdf';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }

  showFileUpload = () => {
    this.fileUpload.current.click();
  };

  render() {
    return (
      <section className="skills">
        <div className="left-content">
          <h1 className="section-header">About me</h1>
          <p>
            From the moment I produced "Hello World" in the console of my first app, I knew i was hooked into the world
            of Web Developement. But web development has never been "just a job" for me, it's offered an engaging
            challenge to continually learn and improve my skills. What started with a "Hello World" has become a
            full-fledged passion that only gets more exciting as the years go by. You can find me on{' '}
            <a href="https://www.linkedin.com/in/dustinheaps/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{' '}
            and{' '}
            <a href="https://github.com/heaps12345" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
          <input type="button" value="View Resume" className="standard-button" onClick={this.showFileUpload} />
          <a href={resume} target="_blank" rel="noopener noreferrer" ref={this.fileUpload} style={{ display: 'none' }}>
            {' '}
          </a>
        </div>
        <div className="skills-content">
          <SkillsAside />
        </div>
      </section>
    );
  }
}

export default Skills;
