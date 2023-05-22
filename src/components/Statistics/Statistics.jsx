import React from 'react';
import { Container, Item, Value } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
<Container>
      <Item>Good: <Value>{good}</Value></Item>
      <Item>Neutral: <Value>{neutral}</Value></Item>
      <Item>Bad: <Value>{bad}</Value></Item>
      <Item>Total: <Value>{total}</Value></Item>
      <Item>Positive feedback: <Value>{positivePercentage}%</Value></Item>
    </Container>
  );
};

export default Statistics;
