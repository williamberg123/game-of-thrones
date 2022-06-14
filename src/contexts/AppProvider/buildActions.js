import * as types from './types';

const buildActions = (dispatch) => {
	return {
		loadCharacters: (characters) => dispatch({ type: types.LOAD_CHARACTERS, payload: characters }),
		loadContinents: (continents) => dispatch({ type: types.LOAD_CONTINENTS, payload: continents }),
		toggleFav: (characterId) => dispatch({ type: types.TOGGLE_FAV, payload: characterId }),
	};
};

export default buildActions;
