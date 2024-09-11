import React from "react";
import styles from "./GameLayout.module.css";
import Information from "./components/information/Information";
import Field from "./components/field/Field";
import { useDispatch } from "react-redux";
import { restartGame } from "./components/actions";

function GameLayout() {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(restartGame());
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
