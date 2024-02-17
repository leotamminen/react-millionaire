// GameOver.js
import React from "react";

function GameOver({ className }) {
  // Function for refreshing the page when clicked "tästä".
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={className}>
      <h1>Peli loppui</h1>
      <p>
        Voit yrittää uudestaan painamalla{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={refreshPage}
        >
          tästä
        </span>{" "}
        tai päivittämällä sivun.
      </p>
    </div>
  );
}

export default GameOver;
