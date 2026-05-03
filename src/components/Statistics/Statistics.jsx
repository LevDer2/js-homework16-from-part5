import React from "react";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  counPositiveFeedbackPercentage,
}) {
  return (
    <div className="statistics">
      {total === 0 ? (
        <p className="message">Please give feedback!</p>
      ) : (
        <>
          <h2 className="subtitle">Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {counPositiveFeedbackPercentage}%</p>
        </>
      )}
    </div>
  );
}