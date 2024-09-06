import React, { useEffect, useState } from "react";
import GameLayout from "./GameLayout";
import store from "./store";

function Game() {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  return <GameLayout state={state} dispatch={store.dispatch} />;
}

export default Game;
