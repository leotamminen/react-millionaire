import React, { useState, useEffect, useRef } from "react";
import Background_music from "../assets/Background_music.mp3";
import fiveToEight from "../assets/five-eight.mp3";
import eightToEleven from "../assets/eight-eleven.mp3";
import elevenToThirteen from "../assets/eleven-thirteen.mp3";
import fourteen from "../assets/fourteen.mp3";
import fifteen from "../assets/fifteen.mp3";
import millionaireRave from "../assets/MillionaireRave.mp3";

const Quiz = ({ questions, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  // refs for various audio tracks
  const audioRefs = {
    backgroundMusic: useRef(new Audio(Background_music)),
    fiveToEight: useRef(new Audio(fiveToEight)),
    eightToEleven: useRef(new Audio(eightToEleven)),
    elevenToThirteen: useRef(new Audio(elevenToThirteen)),
    fourteen: useRef(new Audio(fourteen)),
    fifteen: useRef(new Audio(fifteen)),
    millionaireRave: useRef(new Audio(millionaireRave)),
    // TODO: add correct/incorrect sounds, maybe lock in answer
  };

  // Better way to play multiple audios. Plays song for round and stops and resets all other audio tracks
  const playAudio = (audioRef) => {
    Object.values(audioRefs).forEach((ref) => {
      if (ref.current !== audioRef.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });

    // loop the playing songs
    audioRef.current.loop = true;
    audioRef.current.play();
  };

  useEffect(() => {
    const {
      backgroundMusic,
      fiveToEight,
      eightToEleven,
      elevenToThirteen,
      fourteen,
      fifteen,
      millionaireRave,
    } = audioRefs;

    // Play specific songs for question numbers. Works fine for different rounds
    if (questionNumber < 6) {
      playAudio(backgroundMusic);
    } else if (questionNumber < 9) {
      playAudio(fiveToEight);
    } else if (questionNumber < 12) {
      playAudio(eightToEleven);
    } else if (questionNumber < 14) {
      playAudio(elevenToThirteen);
    } else if (questionNumber === 14) {
      playAudio(fourteen);
    } else if (questionNumber === 15) {
      playAudio(fifteen);
    } else if (questionNumber === 16) {
      playAudio(millionaireRave);
    }
  }, [questionNumber]);

  // Update the current question when the question number changes
  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

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
