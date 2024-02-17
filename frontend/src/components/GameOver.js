// GameOver.js
import React from "react";

function GameOver({ className }) {
  return (
    <div className={className}>
      <h1>Peli loppui</h1>
      <p>You can try again by refreshing the page!</p>
    </div>
  );
}

export default GameOver;
