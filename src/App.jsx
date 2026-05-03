// ! OLD

// import React, { useState } from "react";

// export default function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const total = good + neutral + bad;
//   const counPositiveFeedbackPercentage = total > 0 ? Math.round((good / total) * 100) : 0;
//   const handlePlusGood = () => {
//     return setGood(good + 1);
//   };
//   const handlePlusNeutral = () => {
//     return setNeutral(neutral + 1);
//   };
//   const handlePlusBad = () => {
//     return setBad(bad + 1);
//   };
//   return (
//     <div>
//       <h1>Please give a feedback</h1>
//       <div>
//         <button onClick={handlePlusGood} type="button">
//           Good
//         </button>
//         <button onClick={handlePlusNeutral} type="button">
//           Neutral
//         </button>
//         <button onClick={handlePlusBad} type="button">
//           Bad
//         </button>
//       </div>
//       <div>
//         <div>
//           <h2 className="subtitle">Statistics</h2>
//           <p>Good: {good} </p>
//           <p>Neutral: {neutral} </p>
//           <p>Bad:{bad} </p>
//           <p>Total: {total}</p>
//           <p>Positive feedback: {counPositiveFeedbackPercentage} %</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// ! NEW
import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const counPositiveFeedbackPercentage =
    total > 0 ? Math.round((good / total) * 100) : 0;

  const handlePlusGood = () => {
    setGood(good + 1);
  };

  const handlePlusNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handlePlusBad = () => {
    setBad(bad + 1);
  };

  return (
    <main className="page">
      <div className="feedback-card">
        <Section title="Please leave feedback about our coffee" />

        <FeedbackOptions
          handlePlusGood={handlePlusGood}
          handlePlusNeutral={handlePlusNeutral}
          handlePlusBad={handlePlusBad}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          counPositiveFeedbackPercentage={counPositiveFeedbackPercentage}
        />
      </div>
    </main>
  );
}
