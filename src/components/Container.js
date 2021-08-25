import React from 'react';
import Result from './Result';
import calculate from '../logic/calculate';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // btnName: null,
      dataObj: null,
    };
  }

  // btnName: null,
  onClickHandler = (event) => {
    this.setState(
      (prevState) => (
        {
          // btnName: event.target.value,
          dataObj: calculate(prevState.dataObj, event.target.btn_name),
        }
      ),
    );
  }

  render() {
    return (
      <div className="container">
        <Result />
        <button type="button" btn_name="AC" className="bg-grey"> AC </button>
        <button type="button" btn_name="+/-" className="bg-grey"> +/- </button>
        <button type="button" btn_name="%" className="bg-grey"> % </button>
        <button type="button" btn_name="÷" className="bg-orange"> ÷ </button>
        <button type="button" btn_name="7" className="bg-grey"> 7 </button>
        <button type="button" btn_name="8" className="bg-grey"> 8 </button>
        <button type="button" btn_name="9" className="bg-grey"> 9 </button>
        <button type="button" btn_name="x" className="bg-orange"> x </button>
        <button type="button" btn_name="4" className="bg-grey"> 4 </button>
        <button type="button" btn_name="5" className="bg-grey"> 5 </button>
        <button type="button" btn_name="6" className="bg-grey"> 6 </button>
        <button type="button" btn_name="-" className="bg-orange"> - </button>
        <button type="button" btn_name="1" className="bg-grey"> 1 </button>
        <button type="button" btn_name="2" className="bg-grey"> 2 </button>
        <button type="button" btn_name="3" className="bg-grey"> 3 </button>
        <button type="button" btn_name="+" className="bg-orange"> + </button>
        <button type="button" btn_name="0" className="col-2 bg-grey"> 0 </button>
        <button type="button" btn_name="." className="bg-grey"> . </button>
        <button type="button" btn_name="=" className="bg-orange"> = </button>
      </div>
    );
  }
}
