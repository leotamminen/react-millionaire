import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup } from "mdb-react-ui-kit";
import "./App.css";
import GameOver from "./components/GameOver";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import GameWinner from "./components/GameWinner";
import { questions, prizeSums } from "./questions";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [answersLocked, setAnswersLocked] = useState(false);
  const [millionaire, setMillionaire] = useState(false);

  // Function to handle becoming a millionaire
  const handleBecomeMillionaire = () => {
    setMillionaire(true);
  };

  // Check if the player becomes a millionaire when reaching question number 16 (>15)
  useEffect(() => {
    if (questionNumber > 15) {
      setMillionaire(true);
    }
  }, [questionNumber]);

  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">
          <div className="main">
            {timeOut ? (
              <GameOver className="game-over" />
            ) : millionaire ? (
              <GameWinner />
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
                    onBecomeMillionaire={handleBecomeMillionaire}
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
                key={item.id}
                className={questionNumber === item.id ? "item active" : "item"}
              >
                <h5 className="amount">{item.amount}</h5>
              </li>
            ))}
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default App;
