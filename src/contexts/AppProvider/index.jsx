import { useMemo, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './context';
import reducer from './reducer';
import buildActions from './buildActions';

export default function AppProvider({ children }) {
	const [ characters, charactersDispatch ] = useReducer(reducer, []);
	const [ continents, setContinents ] = useState([]);
	const actions = buildActions(charactersDispatch);

	const memoizedContext = useMemo(
		() => (
			{ actions, characters, continents }
		),
		[actions, characters, continents],
	);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
