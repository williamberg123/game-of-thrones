import { useContext } from 'react';

import Character from '../Character';

import AppContext from '../../contexts/AppProvider/context';
import StyledCharactersList from './styles';

export default function CharactersList() {
	const { characters } = useContext(AppContext);

	const charactersList = characters.map(
		(character) => <Character key={character.id} {...character} />,
	);

	return (
		<StyledCharactersList>
			{charactersList}
		</StyledCharactersList>
	);
}
