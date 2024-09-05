import React from "react";
import GameLayout from './GameLayout';
import store from '../../store';

function Game() {
  return (
    <GameLayout store={store} />
  );
}

export default Game;
