import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "DAD",
    };
  }

  changeParentName = (newName) => {
    this.setState({ parentName: newName });
  };

  render() {
    return (
      <div className="comp">
        Parent Component
        <div>{`parent name : ${this.state.parentName}`}</div>
        <Child changeParentName={this.changeParentName}></Child>
      </div>
    );
  }
}
