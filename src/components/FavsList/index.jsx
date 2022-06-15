import PropTypes from 'prop-types';
import Character from '../Character';

import StyledCharactersList from '../CharactersList/styles';

export default function FavsList({ characters }) {
	const favs = characters.filter(({ isFav }) => !!isFav);

	const favsList = favs.map((character) => {
		return <Character key={character.id} {...character} />;
	});

	return (
		<StyledCharactersList>
			{
				favsList.length
				? favsList
				: <p style={{ color: '#999' }}>Nenhum personagem favorito</p>
			}
		</StyledCharactersList>
	);
}
FavsList.propTypes = {
	characters: PropTypes.instanceOf(Array).isRequired,
};
