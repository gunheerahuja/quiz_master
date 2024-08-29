// src/components/QuestionBox.js
import React from 'react';


function QuestionBox({ questions }) {
  return (
    <div className="question-box">
      {questions.map((question, index) => (
        <div key={index} className="question">
          {question}
        </div>
      ))}
    </div>
  );
}

export default QuestionBox;
