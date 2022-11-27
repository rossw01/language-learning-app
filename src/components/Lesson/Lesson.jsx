import React, { useState } from "react";
import TextInputQuestion from "./QuestionTypes/TextInputQuestion";
import "./Lesson.css";

const Lesson = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const buildQuestions = () => {
    let currentQuestions = props.selectedLesson.content.map(
      (content, index) => {
        return (
          <TextInputQuestion
            key={index} // For tracking Q index
            question={content.question} // For displaying Q
            correctAnswer={content.correctAnswer} // For checking answer
            setCurrentQuestion={setCurrentQuestion} // For incrementing through questions
            isVisible={index === currentQuestion} // For toggling visibility of questions
            currentQuestion={currentQuestion} // For incrementing currentQuestion
          />
        );
      }
    );
    return currentQuestions;
  };

  return (
    <div style={{ height: "90vh", width: "100vw" }}>
      <div className="fb current-lesson">
        <img
          className="lesson-icon"
          src={require(`../../courses/id/images/${props.selectedLesson.image}`)}
        />
        <h1>{props.selectedLesson.name}</h1>
      </div>
      <div className="questions-frame">{buildQuestions()}</div>
    </div>
  );
};

export default Lesson;
