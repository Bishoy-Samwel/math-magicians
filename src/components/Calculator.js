import React from 'react';
import Result from './Result';
import Buttons from './Buttons';

export default function Calculator(props) {
  // eslint-disable-next-line react/prop-types
  const { result, handleClick } = props;
  return (
    <div className="calc-container">
      <Result result={result} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}
