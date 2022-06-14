import PropTypes from 'prop-types';
import StyledMainContainer from './styles';

export default function MainContainer({ children }) {
	return (
		<StyledMainContainer>
			{children}
		</StyledMainContainer>
	);
}

MainContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
