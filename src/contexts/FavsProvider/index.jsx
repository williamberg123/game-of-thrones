import { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import FavContext from './context';
import reducer from './reducer';
import buildActions from './buildActions';

export default function FavsProvider({ children }) {
	const [ favsCharacters, favsCharactersDispatch ] = useReducer(reducer, []);
	const actions = buildActions(favsCharactersDispatch);

	const memoizedContext = useMemo(() => ({ actions, favsCharacters }), [actions, favsCharacters]);

	return (
		<FavContext.Provider value={memoizedContext}>
			{children}
		</FavContext.Provider>
	);
}

FavsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
