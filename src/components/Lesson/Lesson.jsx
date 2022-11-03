import React from 'react'
import TextInputQuestion from './QuestionTypes/TextInputQuestion';


const Lesson = (props) => {
  console.log(props.selectedLanguage);
  console.log(props.selectedLesson);

  const buildQuestions = () => {
    let currentQuestions = props.selectedLesson.content.map((content, index) => {
      return (
        <TextInputQuestion key={index} question={content.question} correctAnswer={content.correctAnswer} />
      );
    });
    return currentQuestions;
  }

  return (
    <div>
      <h1>{props.selectedLesson.name}</h1>
      <img src={require(`../../courses/id/images/${props.selectedLesson.image}`)} />
      <div>
        {buildQuestions()}
      </div>
    </div>
  )
}

export default Lesson
