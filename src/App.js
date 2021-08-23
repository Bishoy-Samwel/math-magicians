import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
