import React from 'react';
import land from '../../assets/land.jpg';
import './Possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={land} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Buy and lease land securely. Verify ownership and recording land buying and selling transactions from end to end.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
