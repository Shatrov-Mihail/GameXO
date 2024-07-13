import React from 'react';
import InformationLayout from './InformationLayout';

function Information({ currentPlayer, isGameEnded, isDraw }) {
  let status;
  if (isDraw) {
    status = 'Ничья';
  } else if (isGameEnded) {
    status = `Победа: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <InformationLayout status={status} />;
}

export default Information;
