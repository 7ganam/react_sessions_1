import React, { Component } from "react";

export default class WithProp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={"comp"}>{this.props.name}</div>;
  }
}
