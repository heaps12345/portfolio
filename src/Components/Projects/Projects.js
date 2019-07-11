import React from 'react';
import './Projects.css';
import bookeoBg from './images/jungle.jpg';
import triviaAppBg from './images/triviaAppBg.png';
import faceFinderBg from './images/faceFinderBg.png';
import crwnBg from './images/hats.png';
import weatherBg from './images/weather.png';

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="grid">
        <figure className="effect">
          <div className="project-logo-container"> </div>
          <div className="background-container">
            <img className="image-background" src={crwnBg} alt="project" />
          </div>
          <figcaption>
            <div className="bottom-container">
              <div className="portfolio-links">
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/heaps12345/clothingApp"
                >
                  Github
                </a>
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://crwn-clothing.herokuapp.com"
                >
                  Website
                </a>
              </div>
            </div>
            <p className="description">
              <span className="projects-title">CRWN Clothing</span> Built using React, Redux, React-Router,
              Redux-Persist, Redux-Saga and Firebase.
            </p>
          </figcaption>
        </figure>
        <figure className="effect">
          <div className="project-logo-container"> </div>
          <div className="background-container">
            <img className="image-background" src={bookeoBg} alt="project" />
          </div>
          <figcaption>
            <div className="bottom-container">
              <div className="portfolio-links">
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/heaps12345/bookeo"
                >
                  Github
                </a>
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bookeo.herokuapp.com/rentals"
                >
                  Website
                </a>
              </div>
            </div>
            <p className="description">
              <span className="projects-title">Bookeo</span> Built using React, Redux, React Router, Google Maps API,
              Amazon S3, Node.js, and PostgreSQL.
            </p>
          </figcaption>
        </figure>
        <figure className="effect">
          <div className="project-logo-container" />
          <div className="background-container">
            <img className="image-background" src={faceFinderBg} alt="project" />
          </div>
          <figcaption>
            <div className="bottom-container">
              <div className="portfolio-links">
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/heaps12345/faceFinder"
                >
                  Github
                </a>
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://face-finder.netlify.com"
                >
                  Website
                </a>
              </div>
            </div>
            <p className="description">
              <span className="projects-title">Face Finder</span>Built using React, Node.js, PostgreSQL, and the
              Clarifai API.
            </p>
          </figcaption>
        </figure>
        <figure className="effect">
          <div className="project-logo-container" />
          <div className="background-container">
            <img className="image-background" src={triviaAppBg} alt="project" />
          </div>
          <figcaption>
            <div className="bottom-container">
              <div className="portfolio-links">
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/heaps12345/triviaApp"
                >
                  Github
                </a>
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://heaps12345.github.io/triviaApp/"
                >
                  Website
                </a>
              </div>
            </div>
            <p className="description">
              {' '}
              <span className="projects-title">Trivia App</span>Built using React, Node.js, and the Open Trivia API.
            </p>
          </figcaption>
        </figure>
        <figure className="effect">
          <div className="project-logo-container" />
          <div className="background-container">
            <img className="image-background" src={weatherBg} alt="project" />
          </div>
          <figcaption>
            <div className="bottom-container">
              <div className="portfolio-links">
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/heaps12345/ReactWeatherApp"
                >
                  Github
                </a>
                <a
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://heaps12345.github.io/ReactWeatherApp/"
                >
                  Website
                </a>
              </div>
            </div>
            <p className="description">
              {' '}
              <span className="projects-title">Weather App</span>Built using React and the Open Weather API.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
