import GameLayout from "./GameLayout";
import { useSelector } from "react-redux";

function Game() {
  const state = useSelector((state) => state);
	
  return <GameLayout state={state} />;
}

export default Game;
