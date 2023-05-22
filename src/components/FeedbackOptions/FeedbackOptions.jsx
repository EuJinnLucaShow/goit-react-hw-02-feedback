import React from 'react';
import { Container, Button } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
<Container>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </Container>
  );
};

export default FeedbackOptions;
