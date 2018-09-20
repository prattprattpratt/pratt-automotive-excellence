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
        <div className="one-stop-banner py-3 px-9 d-flex justify-content-between">
          <img className="logo" src="/assets/logo.png" />
          <h1>Your <span className="one-stop-text">One Stop</span> Automotive Service Center</h1>
          <Button href="#" className="blue md" text="Our Inventory" />
        </div>
        <div className="search-inventory d-flex flex-column">
          <h1><span class="text-bold">Search</span> Our Inventory</h1>
        </div>
        <div className="blah d-flex align-items-center justify-content-center">
          <h1>Blah, blah, blah.</h1>
        </div>
        <div className="values-banner d-flex justify-content-between py-4 px-9">
          <div className="value d-flex flex-column align-items-center flex-1 mx-3 text-justify">
            <FontAwesomeIcon icon="coffee" />
            <h1 className="value-title">Honesty</h1>
            <p>
              We are striving to change the mentality of the automotive industry by creating a new
              standard of honesty in both sales and automotive repair. In any relationship, trust
              is everything and honesty is our mark.
            </p>
          </div>
          <div className="value d-flex flex-column align-items-center flex-1 mx-3 text-justify">
            <FontAwesomeIcon icon="road" />
            <h1 className="value-title">Experience</h1>
            <p>
              Truman Pratt has been in the automotive industry for 28 years. Excellence has always
              been his aim: again and again he has hit the mark.
            </p>
          </div>
          <div className="value d-flex flex-column align-items-center flex-1 mx-3 text-justify">
            <FontAwesomeIcon icon="home" />
            <h1 className="value-title">Service</h1>
            <p>
              Customer service isn’t just a department at Pratt Automotive Excellence, if you haven’t 
              found exactly what you are hoping for in a vehicle or repair, we promise to make it 
              right. We are here to serve you.
            </p>
          </div>
          <div className="value d-flex flex-column align-items-center flex-1 mx-3 text-justify">
            <FontAwesomeIcon icon="lock" />
            <h1 className="value-title">Integrity</h1>
            <p>
              Transparency, communication, and fairness are what we daily strive for here at Pratt 
              Automotive Excellence. Integrity is our standard. Integrity is our promise.
            </p>
          </div>
        </div>
        <div className="text-center py-4 px-9">
          <h1 className="home-quote">We guarantee to provide every customer the most mechanically sound vehicle in the industry at the very best price anywhere.</h1>
        </div>
      </div>
    );
  }
}

export default Home;
