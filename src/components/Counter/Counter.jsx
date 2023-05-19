import React, { Component } from "react";
import { StyledDiv, StyledSpan, StyledButton } from './Counter.styled'


class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <StyledDiv>
        <StyledSpan>0</StyledSpan>
        <StyledButton type="button">Increment by {step}</StyledButton>
        <StyledButton type="button">Decrement by {step}</StyledButton>
      </StyledDiv>
    );
  }
}
export default Counter;
