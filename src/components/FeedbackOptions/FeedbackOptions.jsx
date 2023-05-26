import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Container>
        {options.map((option) => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </Container>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
