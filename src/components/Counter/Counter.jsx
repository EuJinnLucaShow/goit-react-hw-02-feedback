import { Component } from "react";
import { Button, Title } from './Counter.styled'

export default class Counter extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0,      
  };

handleGood = () => {
  this.setState(
    (prevState) => ({
      good: prevState.good + 1,
    }),
    this.countTotalFeedback
  );
};

handleNeutral = () => {
  this.setState(
    (prevState) => ({
      neutral: prevState.neutral + 1,
    }),
    this.countTotalFeedback
  );
};

handleBad = () => {
  this.setState(
    (prevState) => ({
      bad: prevState.bad + 1,
    }),
    this.countTotalFeedback
  );
};

countTotalFeedback = () => {
const { good, neutral, bad } = this.state;
const total = good + neutral + bad;
this.setState({
total: total,
});
this.countPositiveFeedbackPercentage(total);
};
  
countPositiveFeedbackPercentage = (total) => {
const percentage = Math.round((this.state.good / total) * 100);
this.setState({
percentage: percentage,
});
};

  render() {
    return (
      <>      
        <Button type="button" onClick={this.handleGood}>Good</Button>
        <Button type="button" onClick={this.handleNeutral}>Neutral</Button>
        <Button type="button" onClick={this.handleBad}>Bad</Button>
        <Title>Good {this.state.good}</Title>
        <Title>Neutral {this.state.neutral}</Title>
        <Title>Bad {this.state.bad}</Title>
        <Title>Total {this.state.total}</Title>
        <Title>Positive Feedback {this.state.percentage} %</Title>
      </>
    );
  }
}
