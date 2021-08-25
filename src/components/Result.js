import React from 'react';
import PropTypes from 'prop-types';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: props.result };
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

Result.propTypes = {
  result: PropTypes.string,
};

Result.defaultProps = { result: 0 };
