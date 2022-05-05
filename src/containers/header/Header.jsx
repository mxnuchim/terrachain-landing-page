import React from 'react';
import people from '../../assets/people.png';
import house from '../../assets/house.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Buy land securely with Terrachain</h1>
      <p>Purchase land securely and ensure the authenticity and uniqueness of your purchase on the blockchain and instantly verify land title ownership.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 confirmations completed in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={house} />
    </div>
  </div>
);

export default Header;
