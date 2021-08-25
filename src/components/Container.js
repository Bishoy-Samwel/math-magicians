import React from 'react';

import Result from './Result';

const Container = () => (
  <div className="container">
    <Result />
    <button type="button" className="bg-grey"> AC </button>
    <button type="button" className="bg-grey"> +/- </button>
    <button type="button" className="bg-grey"> % </button>
    <button type="button" className="bg-orange"> ÷ </button>
    <button type="button" className="bg-grey"> 7 </button>
    <button type="button" className="bg-grey"> 8 </button>
    <button type="button" className="bg-grey"> 9 </button>
    <button type="button" className="bg-orange"> x </button>
    <button type="button" className="bg-grey"> 4 </button>
    <button type="button" className="bg-grey"> 5 </button>
    <button type="button" className="bg-grey"> 6 </button>
    <button type="button" className="bg-orange"> - </button>
    <button type="button" className="bg-grey"> 1 </button>
    <button type="button" className="bg-grey"> 2 </button>
    <button type="button" className="bg-grey"> 3 </button>
    <button type="button" className="bg-orange"> + </button>
    <button type="button" className="col-2 bg-grey"> 0 </button>
    <button type="button" className="bg-grey"> . </button>
    <button type="button" className="bg-orange"> = </button>
  </div>
);

export default Container;
