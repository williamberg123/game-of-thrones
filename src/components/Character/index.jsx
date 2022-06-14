import PropTypes from 'prop-types';
import CharacterInfo from '../CharacterInfo';

import Image from '../Image';
import StyledCharacter from './styles';

export default function Character(props) {
	const { imageUrl } = props;

	return (
		<StyledCharacter>
			<Image src={imageUrl} />
			<CharacterInfo {...props} />
		</StyledCharacter>
	);
}

Character.propTypes = {
	imageUrl: PropTypes.string.isRequired,
};
