import React, { Component } from "react";

export default class WithState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "no name",
    };
  }

  render() {
    return (
      <div className="comp">
        <span>{this.state.name}</span>

        <button
          onClick={() => {
            this.setState({ name: "Ibrahim" });
          }}
        >
          set name
        </button>

        <button
          onClick={() => {
            this.setState({ name: "no name" });
          }}
        >
          unset name
        </button>
      </div>
    );
  }
}
