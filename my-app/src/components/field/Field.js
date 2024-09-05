import React from 'react';
import FieldLayout from './FieldLayout';

function Field({ store }) {
  const state = store.getState();
  const { field, currentPlayer, isGameEnded } = state;

  const handleClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      const newField = field.slice();
      newField[index] = currentPlayer;
      store.dispatch({ type: 'SET_FIELD', payload: newField });

      const winner = calculateWinner(newField);
      if (winner) {
        store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
        return;
      }

      if (newField.every((cell) => cell !== '')) {
        store.dispatch({ type: 'SET_IS_DRAW', payload: true });
        store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
        return;
      }

      store.dispatch({
        type: 'SET_CURRENT_PLAYER',
        payload: currentPlayer === 'X' ? 'O' : 'X',
      });
    }
  };

  return <FieldLayout field={field} onClick={handleClick} />;
}

function calculateWinner(field) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }

  return null;
}

export default Field;
