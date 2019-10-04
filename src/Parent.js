import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Zeeshan"
    };
  }

  display() {
    this.setState({
      parentName: "Amreen"
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>{this.state.parentName}</h1>
        {/*<button onClick={this.display.bind(this)}>Click Button</button>*/}
        {/*<button onClick={() => this.display()}>Click Button</button>*/}
      </div>
    );
  }
}
export default Parent;
