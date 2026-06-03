import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function FeedbackOptions({}) {
  const { handlePlusGood, handlePlusNeutral, handlePlusBad } = useContext(AuthContext);
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
