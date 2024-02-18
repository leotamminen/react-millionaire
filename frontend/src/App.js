import React, { useState } from "react";
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

  // Define a function to update isMillionaire state
  const handleBecomeMillionaire = () => {
    setIsMillionaire(true);
  };

  console.log("isMillionaire:", isMillionaire); // Add console log here

  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">
          <div className="main">
            {timeOut ? (
              <GameOver className="game-over" />
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
                  />
                </div>
              </>
            )}
          </div>
        </MDBCol>
        <MDBCol md="3" className="money">
          <MDBListGroup className="money-list">
            {prizeSums.map((item) => (
              <>
                <li
                  className={
                    questionNumber === item.id ? "item active" : "item"
                  }
                >
                  <h5 className="amount">{item.amount}</h5>
                </li>
              </>
            ))}
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default App;
