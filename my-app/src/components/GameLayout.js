import React from 'react';
import styles from './GameLayout.module.css';
import Information from './Information';
import Field from './Field';

function GameLayout({
  currentPlayer, isGameEnded, isDraw, field, setField, setCurrentPlayer, setIsGameEnded, setIsDraw
}) {
  const handleReset = () => {
    setField(Array(9).fill(''));
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
  };

  return (
    <div className={styles.gameLayout}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
      />
      <button
	  className={styles.newGame}
	  onClick={handleReset}>Начать заново</button>
    </div>
  );
}

export default GameLayout;
