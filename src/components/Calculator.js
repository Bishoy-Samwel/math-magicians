import React from 'react';
import Result from './Result';
import Buttons from './Buttons';

export default function Calculator(props) {
  // eslint-disable-next-line react/prop-types
  const { result, handleClick } = props;
  return (
    <>
      <p id="calc-p"> Let&lsquo;s do some math! </p>
      <div className="calc-container">
        <Result result={result} />
        <Buttons handleClick={handleClick} />
      </div>
    </>
  );
}
