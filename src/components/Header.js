import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="site-header py-3 px-9">
        <img class="logo" alt="logo" src='/assets/logo.png' />
      </div>
    );
  }
}

export default Header;
