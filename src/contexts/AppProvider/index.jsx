import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './context';
import reducer from './reducer';
import buildActions from './buildActions';
import getCharacters from '../../utils/getCharacters';
// import getContinents from '../../utils/getContinents';

export default function AppProvider({ children }) {
	const [ characters, charactersDispatch ] = useReducer(reducer, []);
	const [ continents ] = useState([]);
	const [ page, setPage ] = useState('home');

	const charactersActions = useCallback(buildActions(charactersDispatch), []);

	const baseUrlCharacters = 'https://thronesapi.com/api/v2/characters';
	// const baseUrlContinents = 'https://thronesapi.com/api/v2/continents';

	const funcSetPage = useCallback((e, actuallyPage) => {
		const allLinks = document.querySelector('nav').querySelectorAll('a');
		allLinks.forEach((link) => link.classList.remove('actually-page'));

		e.target.classList.add('actually-page');
		setPage(actuallyPage);
	}, []);

	const toggleFavs = useCallback((characterId) => {
		charactersActions.toggleFav(characterId);
	}, []);

	const loadCharacters = async () => {
		const charactersData = await getCharacters(baseUrlCharacters);
		charactersActions.loadCharacters(charactersData);
	};

	// const loadContinents = async () => {
	// 	const charactersData = await getContinents(baseUrlCharacters);
	// 	actions.loadContinents(charactersData.data);
	// };

	useEffect(() => {
		loadCharacters();
		// loadContinents();
	}, []);

	const memoizedContext = useMemo(
		() => (
			{ charactersActions, characters, continents, page, funcSetPage, toggleFavs }
		),
		[characters, continents, page, toggleFavs],
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
