import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import AppContext from '../../contexts/AppProvider/context';
import StyledCharacterInfo from './styles';

export default function CharacterInfo({ id, fullName, title, isFav }) {
	const { toggleFavs } = useContext(AppContext);

	return (
		<StyledCharacterInfo>
			<h2>{fullName}</h2>
			<p>{title}</p>

			<label htmlFor={`checkbox-${id}`}>
				<input checked={isFav} onChange={() => toggleFavs(id)} id={`checkbox-${id}`} type="checkbox" />
				{isFav ? <MdOutlineFavorite className="svg-fav" /> : <MdOutlineFavoriteBorder />}
			</label>
		</StyledCharacterInfo>
	);
}

CharacterInfo.propTypes = {
	id: PropTypes.number.isRequired,
	fullName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isFav: PropTypes.bool.isRequired,
};
