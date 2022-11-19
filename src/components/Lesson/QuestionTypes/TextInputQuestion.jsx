import React, { useEffect, useState } from "react";
import QuestionCorrect from "../QuestionCorrect.jsx";
import QuestionIncorrect from "../QuestionIncorrect.jsx";
import incorrectSound from "../../../sounds/question-incorrect-sound.wav";
import correctSound from "../../../sounds/question-correct-sound.wav";
import "./TextInputQuestion.css";
import "../question.css";

const TextInputQuestion = (props) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(undefined);

  function stripPunctuation(input) {
    var punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    return input
      .split("")
      .filter((letter) => {
        return punctuation.indexOf(letter) === -1;
      })
      .join("");
  }

  function checkRegularTypo(answer, correctAnswer) {
    let answerChars = answer.split("");
    let correctChars = correctAnswer.split("");
    let count = 0;
    for (let i = 0; i < answerChars.length; i++) {
      if (answerChars[i] !== correctChars[i]) {
        count++;
      }
    }
    return !(count > 1);
  }

  function checkMismatchingLengthTypo(answer, correctAnswer) {
    let longer;
    let shorter;
    if (answer.length > correctAnswer.length) {
      longer = answer.split("");
      shorter = correctAnswer.split("");
    } else {
      longer = correctAnswer.split("");
      shorter = answer.split("");
    }
    let count = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (shorter[i] !== longer[i]) {
        longer.splice(i, 1);
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  }

  function isCloseEnough(answer, correctAnswer) {
    answer = answer.replaceAll(" ", "");
    correctAnswer = correctAnswer.replaceAll(" ", "");
    // Check lengths are reasonable
    if (answer.length === correctAnswer.length) {
      return checkRegularTypo(answer, correctAnswer);
    } else if (
      answer.length === correctAnswer.length - 1 ||
      answer.length === correctAnswer.length + 1
    ) {
      return checkMismatchingLengthTypo(answer, correctAnswer);
    }
    return false;
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    let answerToCheck = stripPunctuation(userAnswer.toLowerCase());
    let correctAnswer = stripPunctuation(props.correctAnswer.toLowerCase());
    // If the answer matches perfectly:
    if (answerToCheck === correctAnswer) {
      // Perfect Answer:
      setIsCorrect(true);
      new Audio(correctSound).play();
    } else if (isCloseEnough(answerToCheck, correctAnswer)) {
      // Answer with 1 typo
      setIsCorrect(true);
      new Audio(correctSound).play();
    } else {
      // Wrong answer
      setIsCorrect(false);
      new Audio(incorrectSound).play();
    }
    // Corresponding question result component will be displayed when this is set to true
    setIsResultDisplayed(true);
  };

  function handleChange(event) {
    setUserAnswer(event.target.value);
  }

  function styleFunction() {
    // This exists purely to change to bg colour of the question panel
    // upon the question being answered.
    if (props.isVisible) {
      if (isResultDisplayed) {
        return isCorrect
          ? { display: "block", backgroundColor: "#29b027" }
          : { display: "block", backgroundColor: "#c74c44" };
      } else {
        return { display: "block" };
      }
    }
    return { display: "none" };
  }

  useEffect(() => {
    console.log(userAnswer);
  }, [userAnswer]);

  return (
    <div className="lesson-frame" style={styleFunction()}>
      {/* 
          I would never forgive myself if I didn't make this into a function
        // props.isVisible
        //   ? isResultDisplayed
        //     ? props.isCorrect
        //       ? { display: "none", backgroundColor: "Blue" }
        //       : { display: "none", backgroundColor: "Red" }
        //     : { display: "block" }
        //   : { display: "none" } */}
      <p
        className="question-title"
        style={isResultDisplayed ? { color: "white" } : { color: "black" }}
      >
        {props.question}
      </p>
      <form
        onSubmit={submitAnswer}
        style={isResultDisplayed ? { color: "white" } : { color: "black" }}
      >
        <div className="fb col">
          Translate this sentence:
          <div className="user-input">
            <input
              className="input-box"
              type="text"
              name="userInput"
              onChange={handleChange}
              value={userAnswer}
              disabled={isResultDisplayed}
            />
            <button
              type="submit"
              className="input-submit"
              disabled={isResultDisplayed}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>
        {isResultDisplayed && isCorrect && (
          <QuestionCorrect isResultDisplayed={isResultDisplayed} />
        )}
      </div>
      <div>
        {isResultDisplayed && !isCorrect && (
          <QuestionIncorrect
            isResultDisplayed={isResultDisplayed}
            correctAnswer={props.correctAnswer}
          />
        )}
      </div>
      <button
        className="input-submit next-question"
        style={isResultDisplayed ? { display: "block" } : { display: "none" }}
        onClick={() => props.setCurrentQuestion(props.currentQuestion + 1)}
      >
        Next Question
      </button>
    </div>
  );
};

export default TextInputQuestion;
