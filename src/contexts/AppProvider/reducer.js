import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOAD_CHARACTERS: {
			return [ ...action.payload ];
		}

		case types.LOAD_CONTINENTS: {
			return [ ...action.payload ];
		}
	}

	return [ ...state ];
};

export default reducer;
