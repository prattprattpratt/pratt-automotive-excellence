import React, { Component } from 'react';
import './home.css';
import HomeHero from './HomeHero';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Home</h1>
        <HomeHero />
      </div>
    );
  }
}

export default Home;
