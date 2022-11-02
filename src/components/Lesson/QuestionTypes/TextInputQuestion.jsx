import React, { useState } from 'react'

const TextInputQuestion = (props) => {
  const [answer, setAnswer] = useState("");

  function handleChange(event) {
    setAnswer(event.target.value);
    console.log(answer);
  }

  return (
    <div>
      <p>{props.question}</p>
      <label>
        Translate this sentence:
        <input type="text" name="userInput" onChange={handleChange} value={answer} />
      </label>
      <p>{props.correctAnswer}</p>
    </div>
  )
}

export default TextInputQuestion
