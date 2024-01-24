import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import Background_music from "../assets/Background_music.mp3";
import fiveToEight from "../assets/five-eight.mp3";

const Quiz = ({ questions, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  // Sounds
  const [startPlaying] = useSound(Background_music);
  const [RoundsFiveToEight] = useSound(fiveToEight);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  useEffect(() => {
    if (questionNumber < 2) {
      startPlaying();
    }
    if (questionNumber > 2) {
      RoundsFiveToEight();
    }
  }, [startPlaying, RoundsFiveToEight, questionNumber]);

  // Delays the execution of a callback function for any given time
  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  // Handles the click for answers
  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");

    delay(3000, () => {
      setClassName(item.correct ? "answer correct" : "answer incorrect");
    });

    delay(5000, () => {
      if (item.correct) {
        // Delays moving to the next question after 1 sec
        delay(1000, () => {
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
