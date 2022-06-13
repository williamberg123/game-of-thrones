import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.ADD_FAV: {
			return [ ...state ];
		}

		case types.REMOVE_FAV: {
			return [ ...state ];
		}
	}

	return [ ...state ];
};

export default reducer;
