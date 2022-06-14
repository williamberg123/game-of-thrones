import PropTypes from 'prop-types';
import Character from '../Character';

import StyledCharactersList from './styles';

export default function CharactersList({ characters }) {
	const charactersList = characters.map(
		(character) => <Character key={character.id} {...character} />,
	);

	return (
		<StyledCharactersList>
			{charactersList}
		</StyledCharactersList>
	);
}
CharactersList.propTypes = {
	characters: PropTypes.instanceOf(Array).isRequired,
};
