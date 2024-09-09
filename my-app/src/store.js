import gameReducer from './reducer';

const createStore = (gameReducer) => {
	let state = gameReducer(undefined, {});
	let listeners = [];

	return {
		dispatch: (action) => {
			state = gameReducer(state, action);
			listeners.forEach(listener => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter(l => l !== listener);
			};
		}
	};
};

export const store = createStore(gameReducer);




