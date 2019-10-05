import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Amreen"
    };
    this.greet = this.greet.bind(this);
  }
  greet(childName) {
    alert(`Hello parent ${this.state.message} from child is: ${childName}`);
  }
  render() {
    return (
      <div>
        <Child greets={this.greet} />
      </div>
    );
  }
}
export default Parent;
