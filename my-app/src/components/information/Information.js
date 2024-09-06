import React from "react";
import InformationLayout from "./InformationLayout";

function Information({ state }) {
  const { isDraw, isGameEnded, currentPlayer } = state;

  let status;
  if (isDraw) {
    status = "Ничья";
  } else if (isGameEnded) {
    status = `Победа: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <InformationLayout status={status} />;
}

export default Information;
