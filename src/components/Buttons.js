import React from 'react';

const Buttons = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const { handleClick } = props;
  return (
    <>
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
    </>
  );
};

export default Buttons;
