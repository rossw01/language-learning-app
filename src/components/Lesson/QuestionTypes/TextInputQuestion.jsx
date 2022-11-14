import React, { useEffect, useState } from "react";
import QuestionCorrect from "../QuestionCorrect.jsx";
import QuestionIncorrect from "../QuestionIncorrect.jsx";
import incorrectSound from "../../../sounds/question-incorrect-sound.wav";
import correctSound from "../../../sounds/question-correct-sound.wav";

const TextInputQuestion = (props) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [isCorrect, setIsCorrect] = useState();

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

  function submitAnswer() {
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
  }

  function handleChange(event) {
    setUserAnswer(event.target.value);
  }

  useEffect(() => {
    console.log(userAnswer);
  }, [userAnswer]);

  return (
    <div style={props.isVisible ? { display: "block" } : { display: "none" }}>
      <p>{props.question}</p>
      <label>
        Translate this sentence:
        <input
          type="text"
          name="userInput"
          onChange={handleChange}
          value={userAnswer}
        />
      </label>
      <button onClick={() => submitAnswer()}>Submit Answer</button>
      <div>
        {isResultDisplayed === true && isCorrect === true && (
          <QuestionCorrect />
        )}
      </div>
      <div>
        {isResultDisplayed === true && isCorrect === false && (
          <QuestionIncorrect />
        )}
      </div>
      <button
        style={isResultDisplayed ? { display: "block" } : { display: "none" }}
        onClick={() => props.setCurrentQuestion(props.currentQuestion + 1)}
      >
        Next Question
      </button>
    </div>
  );
};

export default TextInputQuestion;
