import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <a 
        href={this.props.href} 
        className={`button${this.props.className ? ' ' + this.props.className : ''}`}
      >{this.props.text}</a>
    );
  }
}

export { Button };
