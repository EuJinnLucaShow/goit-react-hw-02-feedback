import { Component } from "react";

export default class Counter extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0,      
  };

  handleGood = () => {
    this.setState({
      good: this.state.good + 1
    });
  };

  handleNeutral = () => {
  this.setState({
      neutral: this.state.neutral + 1
    });
  };

    handleBad = () => {
  this.setState({
      bad: this.state.bad + 1
    });
  };

  render() {
    return (
      <>        
        <button type="button" onClick={this.handleGood}>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad}>Bad</button>
        <p>{this.state.good}</p>
        <p>{this.state.neutral}</p>
        <p>{this.state.bad}</p>
      </>
    );
  }
}
