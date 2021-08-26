import React from 'react';
import Result from './Result';
import calculate from '../logic/calculate';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: {
        total: null, next: null, operation: null,
      },
      // eslint-disable-next-line react/no-unused-state
      result: 0,
    };
  }

  // btnName: null,
  handleClick = (event) => {
    this.setState(
      (prevState) => (
        {
          dataObj: calculate(prevState.dataObj, event.target.getAttribute('btn_name')),
        }
      ),
    );
    this.setState(
      (prevState) => (
        {
          result: this.getResult(prevState.dataObj, event.target.getAttribute('btn_name')),
        }
      ),
    );
  }

  getResult = (dataObj, btnName) => {
    if (dataObj.total && !dataObj.next && !dataObj.operation) {
      return dataObj.total;
    } if (btnName === 'AC') {
      return 0;
    } if ('+-x÷%'.includes(btnName)) {
      return btnName;
    }
    return dataObj.next || dataObj.total;
  }

  render() {
    const { dataObj, result } = this.state;
    console.log(dataObj);
    return (
      <div className="container">
        <Result result={result} />
        <button type="button" btn_name="AC" onClick={this.handleClick} className="bg-grey"> AC </button>
        <button type="button" btn_name="+/-" onClick={this.handleClick} className="bg-grey"> +/- </button>
        <button type="button" btn_name="%" onClick={this.handleClick} className="bg-grey"> % </button>
        <button type="button" btn_name="÷" onClick={this.handleClick} className="bg-orange"> ÷ </button>
        <button type="button" btn_name="7" onClick={this.handleClick} className="bg-grey"> 7 </button>
        <button type="button" btn_name="8" onClick={this.handleClick} className="bg-grey"> 8 </button>
        <button type="button" btn_name="9" onClick={this.handleClick} className="bg-grey"> 9 </button>
        <button type="button" btn_name="x" onClick={this.handleClick} className="bg-orange"> x </button>
        <button type="button" btn_name="4" onClick={this.handleClick} className="bg-grey"> 4 </button>
        <button type="button" btn_name="5" onClick={this.handleClick} className="bg-grey"> 5 </button>
        <button type="button" btn_name="6" onClick={this.handleClick} className="bg-grey"> 6 </button>
        <button type="button" btn_name="-" onClick={this.handleClick} className="bg-orange"> - </button>
        <button type="button" btn_name="1" onClick={this.handleClick} className="bg-grey"> 1 </button>
        <button type="button" btn_name="2" onClick={this.handleClick} className="bg-grey"> 2 </button>
        <button type="button" btn_name="3" onClick={this.handleClick} className="bg-grey"> 3 </button>
        <button type="button" btn_name="+" onClick={this.handleClick} className="bg-orange"> + </button>
        <button type="button" btn_name="0" onClick={this.handleClick} className="col-2 bg-grey"> 0 </button>
        <button type="button" btn_name="." onClick={this.handleClick} className="bg-grey"> . </button>
        <button type="button" btn_name="=" onClick={this.handleClick} className="bg-orange"> = </button>
      </div>
    );
  }
}
