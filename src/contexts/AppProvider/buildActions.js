import * as types from './types';

const buildActions = (dispatch) => {
	return {
		loadCharacters: (characters) => dispatch({ type: types.LOAD_CHARACTERS, payload: characters }),
		toggleFav: (characterId) => dispatch({ type: types.TOGGLE_FAV, payload: characterId }),
	};
};

export default buildActions;
