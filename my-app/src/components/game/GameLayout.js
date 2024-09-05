import React, { useState, useEffect } from "react";
import styles from "./GameLayout.module.css";
import Information from "../information/Information";
import Field from "../field/Field";

function GameLayout({ store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return () => unsubscribe();
  }, [store]);

  const handleReset = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };

  return (
    <div className={styles.gameLayout}>
      <Information store={store} />
      <Field store={store} />
      <button className={styles.newGame} onClick={handleReset}>
        Начать заново
      </button>
    </div>
  )
}

export default GameLayout;
