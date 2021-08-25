import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <p className="col-4" id="result">
        {result}
      </p>
    );
  }
}
