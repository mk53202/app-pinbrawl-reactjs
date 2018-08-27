import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import './Button.css';


handleClick = () => {
  alert("Component Click: " + this.props.name)
};

render() {
  return (
      <div>
          <Button bsStyle="primary" bsSize="large">{this.props.label}</Button>
      </div>
  );
};

export default Button; // Don’t forget to use export default!

// <button name={this.props.name} onClick={this.handleClick}>{this.props.label}</button>
