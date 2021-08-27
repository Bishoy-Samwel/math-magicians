import React, { useState } from 'react';
import Result from './Result';
import calculate from '../logic/calculate';

export default function Container() {
  const [dataObj, setDataObj] = useState({
    total: null, next: null, operation: null,
  });
  const [result, setresult] = useState(0);

  const getResult = (dataObj, btnName) => {
    if (dataObj.total && !dataObj.next && !dataObj.operation) {
      return dataObj.total;
    } if (btnName === 'AC') {
      return 0;
    } if ('+-x÷%'.includes(btnName)) {
      return btnName;
    }
    return dataObj.next || dataObj.total;
  };

  const handleClick = (event) => {
    setDataObj({ ...dataObj, ...calculate(dataObj, event.target.getAttribute('btn_name')) });
    setresult(getResult(dataObj, event.target.getAttribute('btn_name')));
  };

  return (
    <div className="container">
      <Result result={result} />
      <button type="button" btn_name="AC" onClick={handleClick} className="bg-grey"> AC </button>
      <button type="button" btn_name="+/-" onClick={handleClick} className="bg-grey"> +/- </button>
      <button type="button" btn_name="%" onClick={handleClick} className="bg-grey"> % </button>
      <button type="button" btn_name="÷" onClick={handleClick} className="bg-orange"> ÷ </button>
      <button type="button" btn_name="7" onClick={handleClick} className="bg-grey"> 7 </button>
      <button type="button" btn_name="8" onClick={handleClick} className="bg-grey"> 8 </button>
      <button type="button" btn_name="9" onClick={handleClick} className="bg-grey"> 9 </button>
      <button type="button" btn_name="x" onClick={handleClick} className="bg-orange"> x </button>
      <button type="button" btn_name="4" onClick={handleClick} className="bg-grey"> 4 </button>
      <button type="button" btn_name="5" onClick={handleClick} className="bg-grey"> 5 </button>
      <button type="button" btn_name="6" onClick={handleClick} className="bg-grey"> 6 </button>
      <button type="button" btn_name="-" onClick={handleClick} className="bg-orange"> - </button>
      <button type="button" btn_name="1" onClick={handleClick} className="bg-grey"> 1 </button>
      <button type="button" btn_name="2" onClick={handleClick} className="bg-grey"> 2 </button>
      <button type="button" btn_name="3" onClick={handleClick} className="bg-grey"> 3 </button>
      <button type="button" btn_name="+" onClick={handleClick} className="bg-orange"> + </button>
      <button type="button" btn_name="0" onClick={handleClick} className="col-2 bg-grey"> 0 </button>
      <button type="button" btn_name="." onClick={handleClick} className="bg-grey"> . </button>
      <button type="button" btn_name="=" onClick={handleClick} className="bg-orange"> = </button>
    </div>
  );
}
