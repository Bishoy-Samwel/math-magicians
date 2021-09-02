import './App.css';
import React from 'react';
import Container from './components/Container';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}
