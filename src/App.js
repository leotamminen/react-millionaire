import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import { questions, prizeSums } from "./questions";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">
          <div className="main">
            <div style={{ height: "50%", position: "relative" }}>
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div style={{ height: "50%" }}>
              <Quiz
                questions={questions}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setTimeOut={setTimeOut}
              />
            </div>
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
