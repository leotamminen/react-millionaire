import React, { useState, useEffect } from "react";

const Quiz = ({ questions, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  // Handles the click for answers
  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");

    // Delays the execution of a callback function for any given time
    const delay = (duration, callBack) => {
      setTimeOut(() => {
        callBack();
      }, duration);
    };

    delay(3000, () => {
      setClassName(
        item.correct ? "answer was correct" : "answer was incorrect"
      );
    });

    delay(5000, () => {
      if (item.correct) {
        // Delays moving to the next question after 5 sec
        delay(5000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div
            className={selectedAnswer === item ? className : "answer"}
            // can select answer if not selected already
            onClick={() => !selectedAnswer && handleClick(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
