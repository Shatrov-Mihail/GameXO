import React, { useState } from 'react';
import GameLayout from './GameLayout';

const initialFieldState = Array(9).fill('');

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(initialFieldState);

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      setField={setField}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
    />
  );
}

export default Game;
