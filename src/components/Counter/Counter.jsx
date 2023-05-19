import React, { Component } from "react";
import { Div, Span, Button } from './Counter.styled'


class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

handleIncrement = evt => {
    console.log("Increment button was clicked!", evt); // працює
    
  }

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // працює
    
  }

  render() {
    const { step } = this.props;

    return (
      <Div>
        <Span>0</Span>
        <Button type="button" onClick={this.handleIncrement} >Increment by {step}</Button>
        <Button type="button" onClick={this.handleDecrement} >Decrement by {step}</Button>
      </Div>
    );
  }
}
export default Counter;
