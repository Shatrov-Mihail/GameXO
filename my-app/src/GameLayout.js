import React from "react";
import styles from "./GameLayout.module.css";
import Information from "./components/information/Information";
import Field from "./components/field/Field";

function GameLayout({ state, dispatch }) {
  const handleReset = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <div className={styles.gameLayout}>
      <Information state={state} />
      <Field state={state} dispatch={dispatch} />
      <button className={styles.newGame} onClick={handleReset}>
        Начать заново
      </button>
    </div>
  );
}

export default GameLayout;
