import React, { Component } from "react";

class ternaryPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
  }
  render() {
    /* if (this.state.flag) {
      return <div>hello if</div>;
    } else {
      return <div>hello else</div>;
    } */
    return this.state.flag && <div>hello if</div>; //if true then only hello if will display
    //return this.state.flag ? <div>hello if</div> : <div>hello else</div>; //if else with ternary operators
  }
}
export default ternaryPractice;
