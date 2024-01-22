import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MDBRow>
        <MDBCol md="9">Quiz</MDBCol>
        <MDBCol md="3">Money</MDBCol>
      </MDBRow>
    </div>
  );
}

export default App;
