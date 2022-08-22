import React, { Component } from "react";

export default class WithChildrenProp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="comp">{this.props.children}</div>;
  }
}
