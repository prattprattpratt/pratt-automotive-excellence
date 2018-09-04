import React, { Component } from 'react';
import './home.css';
import HomeHero from './HomeHero';
import { Button } from '../toolbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <HomeHero />
        <div className="one-stop-banner d-flex justify-content-between">
          <img className="logo" src="/assets/logo.png" />
          <h1>Your <span className="one-stop-text">One Stop</span> Automotive Service Center</h1>
          <Button href="#" className="blue md" text="Our Inventory" />
        </div>
        <div className="blah d-flex align-items-center justify-content-center">
          <h1>Blah, blah, blah.</h1>
        </div>
        <div className="values-banner d-flex justify-content-between">
          <div className="value d-flex flex-column align-items-center">
            <FontAwesomeIcon icon="coffee" />
            <h1 className="value-title">Honesty</h1>
            <p>
              We are striving to change the mentality of the automotive industry by creating a new 
              standard of honesty in both sales and automotive repair. In any relationship, trust 
              is everything and honesty is our mark.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
