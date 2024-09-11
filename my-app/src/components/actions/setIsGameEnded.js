export const setIsGameEnded = (isGameEnded) => {
	return {
		type: "SET_IS_GAME_ENDED",
		payload: isGameEnded,
	};
};