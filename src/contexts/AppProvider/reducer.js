import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOAD_CHARACTERS: {
			return [ ...action.payload ];
		}

		case types.TOGGLE_FAV: {
			const characterId = action.payload;
			const itemIndex = state.findIndex(({ id }) => id === characterId);
			const updatedState = [ ...state ];

			updatedState[itemIndex].isFav = !updatedState[itemIndex].isFav;
			return [ ...updatedState ];
		}
	}

	return [ ...state ];
};

export default reducer;
