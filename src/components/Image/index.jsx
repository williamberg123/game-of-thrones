import PropTypes from 'prop-types';
import StyledImage from './styles';

export default function Image({ src }) {
	return <StyledImage src={src} />;
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
};
