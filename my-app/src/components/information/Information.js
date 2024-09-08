import React from "react";
import InformationLayout from "./InformationLayout";
import { store } from "../../store";

function Information() {
  const { isDraw, isGameEnded, currentPlayer } = store.getState();

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
