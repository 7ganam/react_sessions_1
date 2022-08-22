import React, { Component } from "react";

export default class StateMergeExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Ali",
      secondName: "Ibrahim",
    };
  }
  render() {
    return (
      <div className="comp">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>

        <button
          onClick={() => {
            this.setState({ firstName: "Ibrahim" });
          }}
        >
          set name
        </button>

        <button
          onClick={() => {
            this.setState({ firstName: "no name" });
          }}
        >
          unset name
        </button>
      </div>
    );
  }
}
