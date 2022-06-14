import PropTypes from 'prop-types';

import StyledCharacterInfo from './styles';

export default function CharacterInfo({ fullName, title }) {
	return (
		<StyledCharacterInfo>
			<h2>{fullName}</h2>
			<p>{title}</p>
		</StyledCharacterInfo>
	);
}

CharacterInfo.propTypes = {
	fullName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
