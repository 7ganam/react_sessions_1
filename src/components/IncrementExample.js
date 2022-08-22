import React, { Component } from "react";

export default class IncrementExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementWrong = () => {
    this.setState({ count: this.state.count + 1 });
  };

  increment5Wrong = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  increment5Right = () => {
    this.setState((oldState) => ({ count: oldState.count + 1 }));
    this.setState((oldState) => ({ count: oldState.count + 1 }));
    this.setState((oldState) => ({ count: oldState.count + 1 }));
    this.setState((oldState) => ({ count: oldState.count + 1 }));
    this.setState((oldState) => ({ count: oldState.count + 1 }));
  };

  render() {
    return (
      <div className="comp">
        <div>{this.state.count}</div>
        <button onClick={this.incrementWrong}>increment wrong</button>
        <button onClick={this.increment5Wrong}>increment 5 wrong</button>
        <button onClick={this.increment5Right}>increment 5 right</button>
      </div>
    );
  }
}
