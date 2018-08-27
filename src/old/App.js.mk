import React, { Component } from 'react';
import pinball_logo from './pinball_logo.svg';
import './App.css';
// import Button from './Button';
// import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pinball_logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PinBrawl</h1>
        </header>
        <Button bsSize="large">Press me!</Button>
        <Button bsSize="large">No press me!</Button>
    );
  }
}

export default App;
