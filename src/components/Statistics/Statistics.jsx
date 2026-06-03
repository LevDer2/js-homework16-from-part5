import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Statistics({}) {
  const { good, neutral, bad, total, counPositiveFeedbackPercentage } =
    useContext(AuthContext);
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
