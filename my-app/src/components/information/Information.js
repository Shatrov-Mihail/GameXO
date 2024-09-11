import React from "react";
import InformationLayout from "./InformationLayout";
import { useSelector } from "react-redux";

function Information() {
  const { isDraw, isGameEnded, currentPlayer } = useSelector((state) => state);

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
