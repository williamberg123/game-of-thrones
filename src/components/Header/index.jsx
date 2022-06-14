import PropTypes from 'prop-types';

import StyledHeader from './styles';

export default function Header({ children }) {
	return (
		<StyledHeader>
			{children}
		</StyledHeader>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
};
