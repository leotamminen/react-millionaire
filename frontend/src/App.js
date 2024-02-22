import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";
import GameOver from "./components/GameOver";
import GameWinner from "./components/GameWinner";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import { questions, prizeSums } from "./questions";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [answersLocked, setAnswersLocked] = useState(false);
  const [isMillionaire, setIsMillionaire] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("0 €");
  const [animationDuration, setAnimationDuration] = useState(4);

  // Update earned money when the question number changes
  useEffect(() => {
    // only start tracking after player got through first question
    questionNumber > 1 &&
      // Find the right amount in prizeSums and update players earned money
      setEarnedMoney(
        prizeSums.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  // Define a function to update isMillionaire state
  const handleBecomeMillionaire = () => {
    setIsMillionaire(true);
  };

  // Update the animation duration only when questionNumber changes
  useEffect(() => {
    // Calculate the animation duration based on the questionNumber
    const newAnimationDuration = 4 + (questionNumber - 1) * 0.5;
    setAnimationDuration(newAnimationDuration);
    console.log("animaation kesto: ", animationDuration);
  }, [questionNumber]);

  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">
          <div className="main">
            {timeOut ? (
              <GameOver className="game-over" earnedMoney={earnedMoney} />
            ) : isMillionaire ? (
              <GameWinner className="game-over" />
            ) : (
              <>
                <div style={{ height: "50%", position: "relative" }}>
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                      answersLocked={answersLocked}
                    />
                  </div>
                </div>
                <div style={{ height: "50%" }}>
                  <Quiz
                    questions={questions}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    setAnswersLocked={setAnswersLocked}
                    handleBecomeMillionaire={handleBecomeMillionaire}
                    animationDuration={animationDuration}
                  />
                </div>
              </>
            )}
          </div>
        </MDBCol>
        <MDBCol md="3" className="money">
          <MDBListGroup className="money-list">
            {prizeSums.map((item) => (
              <li
                key={item.id} // Add a unique key prop for better list rendering performance
                className={questionNumber === item.id ? "item active" : "item"}
              >
                <h5 className="amount">{item.amount}</h5>
              </li>
            ))}
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
      {/* this is for updating the CSS variable for animation duration */}
      <style>{`:root { --animation-duration: ${animationDuration}s; }`}</style>
    </div>
  );
}

export default App;
