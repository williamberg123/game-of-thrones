import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './context';
import reducer from './reducer';
import buildActions from './buildActions';
import getCharacters from '../../utils/getCharacters';

export default function AppProvider({ children }) {
	const [ characters, charactersDispatch ] = useReducer(reducer, []);
	const [ page, setPage ] = useState('home');

	const tagUlRef = useRef(null);

	const charactersActions = useCallback(buildActions(charactersDispatch), []);

	const baseUrlCharacters = 'https://thronesapi.com/api/v2/characters';

	const funcSetPage = useCallback((e, actuallyPage) => {
		const allLinks = document.querySelector('nav').querySelectorAll('a');
		allLinks.forEach((link) => link.classList.remove('actually-page'));

		e.target.classList.add('actually-page');
		setPage(actuallyPage);
		const deviceWidth = document.body.clientWidth;

		if (deviceWidth <= 600) tagUlRef.current.style.display = 'none';
	}, []);

	const toggleFavs = useCallback((characterId) => {
		charactersActions.toggleFav(characterId);
	}, []);

	const toggleMenuBar = useCallback(() => {
		tagUlRef.current.style.display = 'flex';
	}, []);

	const loadCharacters = async () => {
		const charactersData = await getCharacters(baseUrlCharacters);
		charactersActions.loadCharacters(charactersData);
	};

	useEffect(() => {
		loadCharacters();
	}, []);

	const memoizedContext = useMemo(
		() => (
			{
				charactersActions, characters, page, funcSetPage,
				toggleFavs, toggleMenuBar, tagUlRef,
			}
		),
		[characters, page, toggleFavs],
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
