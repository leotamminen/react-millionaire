import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">
          <div className="main">
            <div style={{ height: "50%" }}>
              <Quiz />
            </div>
          </div>
        </MDBCol>
        <MDBCol md="3">Money</MDBCol>
      </MDBRow>
    </div>
  );
}

export default App;
