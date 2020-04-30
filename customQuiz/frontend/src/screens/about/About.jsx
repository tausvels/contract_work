import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = (props) => {
  return (
    <div>
      <h1>This is the about page</h1>
      <h2>Return to home page: <Link to = '/'>Click Here</Link></h2> 
    </div>
  );
};

export default About;