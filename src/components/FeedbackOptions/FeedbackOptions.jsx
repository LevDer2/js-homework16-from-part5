import React from "react";

export default function FeedbackOptions({
  handlePlusGood,
  handlePlusNeutral,
  handlePlusBad,
}) {
  return (
    <div className="buttons">
      <button className="btn good" onClick={handlePlusGood} type="button">
        Good
      </button>

      <button className="btn neutral" onClick={handlePlusNeutral} type="button">
        Neutral
      </button>

      <button className="btn bad" onClick={handlePlusBad} type="button">
        Bad
      </button>
    </div>
  );
}