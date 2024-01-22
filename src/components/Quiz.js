import React, { useState, useEffect } from "react";

const Quiz = ({ questions, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div className={selectedAnswer === item ? className : "answer"}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
