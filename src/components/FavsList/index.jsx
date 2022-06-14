import PropTypes from 'prop-types';
import Character from '../Character';

import StyledCharactersList from '../CharactersList/styles';

export default function FavsList({ characters }) {
	const favsList = characters.map((character) => {
		return character.isFav ? <Character key={character.id} {...character} /> : null;
	});

	return (
		<StyledCharactersList>
			{favsList}
		</StyledCharactersList>
	);
}
FavsList.propTypes = {
	characters: PropTypes.instanceOf(Array).isRequired,
};
