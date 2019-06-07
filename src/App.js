import React from "react";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";
import Skills from "./Components/Skills/Skills.js";
import Navigation from "./Components/Navigation/Navigation.js";
import MobileNav from "./Components/Navigation/MobileNav.js";
import Particles from "react-particles-js";
import "./App.css";
import { Link } from "react-scroll";

const particleConfig = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 2,
      random: true
    },
    opacity: {
      value: 0.2,
      random: false
    },
    line_linked: {
      opacity: 0.1
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    resize: true
  }
};

class App extends React.Component {
  

  render() {
    return (
      <div id="outer-container">
        <Particles className="particles-js" params={particleConfig} />
        <MobileNav />
        <div id="page-wrap">
          <header>
            <div className="header-content">
              <div className="header-text">
                <h1 className="header-name">Dustin Heaps</h1>
                <h3 className="subheader">Web Developer</h3>
              </div>
              <Link to="projects" offset={-100} smooth={true} duration={500}>
                <input
                  type="button"
                  className="standard-button"
                  value="View Projects"
                />
              </Link>
            </div>
          </header>
          <Projects name="projects" />
          <Skills name="skills" />
          <Contact name="contact" />
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;
