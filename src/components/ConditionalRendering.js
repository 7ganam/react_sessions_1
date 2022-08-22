import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: true,
    };
  }

  renderCondition = () => {
    if (this.state.condition) {
      return <div>Ahmed</div>;
    } else {
      return <div>Mohammed</div>;
    }
  };

  render() {
    return (
      <div className="comp">
        {this.renderCondition()}
        <div>
          {this.state.condition ? <div>Ahmed</div> : <div>Mohammed</div>}
        </div>
        <div>
          {this.state.condition && <div>Ahmed</div>}
          {!this.state.condition && <div>Mohammed</div>}
        </div>

        <button
          onClick={() =>
            this.setState((old) => ({
              condition: !old.condition,
            }))
          }
        >
          toggle
        </button>
      </div>
    );
  }
}
