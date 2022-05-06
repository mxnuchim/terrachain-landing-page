import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Registration, authentication and verification of land ownership',
    text: 'A simple and intuitive interface allowing user to request a land title, verify the authenticity and uniqueness of a piece of land they wish to acquire.',
  },
  {
    title: 'An open and transparent land market',
    text: 'Availability of all information (history, geographical details, payment integration in the platform).',
  },
  {
    title: 'Securing the long-term rental of land',
    text: 'Traceability and monitoring for the rental of land for exploitation over a fixed period.',
  }
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
