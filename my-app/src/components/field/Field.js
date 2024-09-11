import React from "react";
import FieldLayout from "./FieldLayout";
import { useSelector, useDispatch } from "react-redux";
import { setField, setIsGameEnded, setIsDrew, setCurrentPlayer } from "../actions";

function Field() {
  const { field, currentPlayer, isGameEnded } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (field[index] === "" && !isGameEnded) {
      const newField = field.slice();
      newField[index] = currentPlayer;
     dispatch(setField(newField));

      const winner = calculateWinner(newField);
      if (winner) {
        dispatch(setIsGameEnded(true));
        return;
      }

      if (newField.every((cell) => cell !== "")) {
        dispatch(setIsDrew(true));
        dispatch(setIsGameEnded(true));
        return;
      }

      dispatch(setCurrentPlayer(currentPlayer === "X" ? "O" : "X"));
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
