import React from 'react'

const Lesson = (props) => {
  console.log(props.selectedLanguage);
  console.log(props.selectedLesson);
  return (
    <div>
      <h1>{props.selectedLesson.name}</h1>
      <img src={require(`../../courses/id/images/${props.selectedLesson.image}`)}/>
    </div>
  )
}

export default Lesson
