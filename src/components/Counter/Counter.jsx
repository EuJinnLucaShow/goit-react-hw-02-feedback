import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by 1
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by 1
        </button>
      </div>
    );
  }
}

export default Counter;
