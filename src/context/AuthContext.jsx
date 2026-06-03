import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const title = "Please leave feedback about our coffee";

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
    <AuthContext.Provider
      value={{
        handlePlusGood,
        handlePlusNeutral,
        handlePlusBad,
        good,
        neutral,
        bad,
        total,
        counPositiveFeedbackPercentage,
        title,
        setGood,
        setNeutral,
        setBad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
