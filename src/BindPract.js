import React, { Component } from "react";

class BindPract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Zeeshan"
    };
    //this.display = this.display.bind(this); binding in constructor
  }

  /*  display() {
    this.setState({
      parentName: "Amreen"
    });
    console.log(this);
  } */
  display = () => {
    this.setState({
      parentName: "Amreen"
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.parentName}</h1>
        {/*<button onClick={this.display.bind(this)}>Click Button</button> Binding in render example*/}
        {/*<button onClick={() => this.display()}>Click Button</button> Arrow function in render example*/}
        {/*<button onClick={this.display}>CLick Button</button> constructor binding*/}
        <button onClick={this.display}>Click Button</button>
        {/* class property as arrow functions */}
      </div>
    );
  }
}
export default BindPract;
