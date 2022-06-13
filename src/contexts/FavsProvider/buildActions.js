import * as types from './types';

const buildActions = (dispatch) => {
	return {
		addFav: (itemId) => dispatch({ type: types.ADD_FAV, payload: itemId }),
		removeFav: (itemId) => dispatch({ type: types.REMOVE_FAV, payload: itemId }),
	};
};

export default buildActions;
