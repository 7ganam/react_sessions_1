import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comp" style={{ width: "90%" }}>
        Child Component
        <button onClick={() => this.props.changeParentName("Morad")}>
          {" "}
          change parent name
        </button>
      </div>
    );
  }
}
