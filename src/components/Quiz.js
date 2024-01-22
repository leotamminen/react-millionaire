import React, { useState, useEffect } from "react";

const Quiz = ({ questions, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(question[questionNumber - 1]);
  }, [questions, questionNumber]);

  return <div>Quiz</div>;
};

export default Quiz;
