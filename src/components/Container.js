import React, { useState } from 'react';
import Result from './Result';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

export default function Container() {
  const [dataObj, setDataObj] = useState({
    total: null, next: null, operation: null,
  });

  const handleClick = (event) => {
    const keyPress = event.target.getAttribute('btn_name');
    setDataObj({ ...dataObj, ...calculate(dataObj, keyPress) });
  };

  const { total, next, operation } = dataObj;
  return (
    <div className="container">
      <Result result={next || operation || total || '0'} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}
