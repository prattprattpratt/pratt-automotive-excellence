import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="site-footer">
        <img class="logo" alt="logo" src='/assets/logo.png' />
        <p className="pt-3 white-text">Where honesty is not just the best policy, it's the only policy.</p>
        <p className="pt-2 gray-text">420 Northland Dr. Cameron, MO 64429</p>
        <p className="pt-2 gray-text">816-632-8444</p>
      </div>
    );
  }
}

export default Footer;
