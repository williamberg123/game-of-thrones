import PropTypes from 'prop-types';
import StyledContinent from './styles';

export default function Continent({ id, name }) {
	return (
		<StyledContinent>
			<h3>{`${id + 1} - ${name}`}</h3>
		</StyledContinent>
	);
}

Continent.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};
