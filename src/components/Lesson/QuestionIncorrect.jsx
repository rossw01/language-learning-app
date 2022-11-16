import React from "react";
import "./QuestionResult.css";

const QuestionIncorrect = (props) => {
  return (
    <div>
      <p
        style={
          props.isResultDisplayed ? { color: "white" } : { color: "black" }
        }
      >
        Incorrect!
      </p>
    </div>
  );
};

export default QuestionIncorrect;
