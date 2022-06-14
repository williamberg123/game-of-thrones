import PropTypes from 'prop-types';

import StyledSection from './styles';

export default function Section({ children }) {
	return (
		<StyledSection>
			{children}
		</StyledSection>
	);
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
};
