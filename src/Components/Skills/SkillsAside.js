import React from 'react';
import './SkillsAside.css';

const SkillsAside = () => {
  return (
    <ul className="skills-list">
      <li style={{ borderRadius: '8px 0 0 0' }}>
        <i className="fab fa-html5" />
        <p>HTML5</p>
      </li>
      <li>
        <i className="fab fa-css3-alt" />
        <p>CSS3</p>
      </li>
      <li style={{ borderRadius: '0 8px 0 0' }}>
        <i className="fab fa-js-square" />
        <p>ES6</p>
      </li>
      <li>
        <i className="fab fa-react" />
        <p>React</p>
      </li>
      <li>
        <i className="fab fa-node-js" />
        <p>Node.JS</p>
      </li>
      <li>
        <i className="fa fa-link" />
        <p>Redux</p>
      </li>
      <li style={{ borderRadius: '0 0  0 8px' }}>
        <i className="fab fa-sass" />
        <p>Sass</p>
      </li>
      <li>
        <i className="fas fa-database" />
        <p>PostgreSQL</p>
      </li>
      <li style={{ borderRadius: '0 0 8px 0' }}>
        <i className="fas fa-database" />
        <p>Express</p>
      </li>
    </ul>
  );
};

export default SkillsAside;
