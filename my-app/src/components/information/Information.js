import React, { useState, useEffect } from "react";
import InformationLayout from "./InformationLayout";

function Information({ store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return () => unsubscribe();
  }, [store]);

  let status;
  if (state.isDraw) {
    status = "Ничья";
  } else if (state.isGameEnded) {
    status = `Победа: ${state.currentPlayer}`;
  } else {
    status = `Ходит: ${state.currentPlayer}`;
  }

  return <InformationLayout status={status} />;
}

export default Information;
