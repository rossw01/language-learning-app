import React from "react";
import "./QuestionResult.css";

const QuestionIncorrect = (props) => {
  return (
    <div style={{ color: "white" }}>
      <p style={{ fontWeight: "bold", fontSize: "18px" }}>Incorrect!</p>
      <p>{`Correct answer: ${props.correctAnswer}`}</p>
    </div>
  );
};

export default QuestionIncorrect;
