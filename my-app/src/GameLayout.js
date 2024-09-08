import React from "react";
import styles from "./GameLayout.module.css";
import Information from "./components/information/Information";
import Field from "./components/field/Field";
import { store } from "./store";

function GameLayout() {
  const handleReset = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };

  return (
    <div className={styles.gameLayout}>
      <Information />
      <Field />
      <button className={styles.newGame} onClick={handleReset}>
        Начать заново
      </button>
    </div>
  );
}

export default GameLayout;
