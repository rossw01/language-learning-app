import React from "react";
import "./QuestionResult.css";

const QuestionCorrect = (props) => {
  return (
    <div>
      <p
        style={
          props.isResultDisplayed ? { color: "white" } : { color: "black" }
        }
      >
        Correct!
      </p>
    </div>
  );
};

export default QuestionCorrect;
