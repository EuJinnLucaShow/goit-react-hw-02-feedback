import React, { useState } from 'react';

function Counter() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
      total: prevState.total + 1,
      percentage: Math.round((prevState.good / prevState.total) * 100)
    }));
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <div>
        <h2>Feedback Statistics</h2>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {state.total}</p>
        <p>Percentage: {state.percentage}%</p>
      </div>
    </div>
  );
}

export default Counter;
