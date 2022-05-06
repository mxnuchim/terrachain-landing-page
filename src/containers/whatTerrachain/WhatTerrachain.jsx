import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatTerrachain.css';

const WhatTerrachain = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Terrachain?" text="Terrachain is digital platform based on a shared register ledger, the Filparty blockchain, allowing to authenticate, verify titles ownership and record land buying and selling transactions from end to end. In collaboration with the authorities, Terrachain respects local legal procedures and details the history of land transactions.
      This information may not be altered, corrupted, counterfeited or reproduced thanks to the security and immutability of our blockchain. we thus offer our users an end-to-end digital solution for real estate procedures.
      Terrachain redefines the way people buy and invest in real estate properties in developing countries." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Purchase" text="Do you want to buy land? our solution based on the blockchain ensures you a secure property and a fast and fraud-free acquisition procedure. Verify the land, negotiate and finalize your transaction all on Terrachain." />
      <Feature title="Verify and authenticate" text="Verify and authenticate a title deed within 24 hours maximum. 100% online service at cheaper price." />
      <Feature title="Land Rental" text="Do you want to rent land? use our 100% dematerialized service to secure your transactions" />
    </div>
  </div>
);

export default WhatTerrachain;
