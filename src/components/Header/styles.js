import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	padding: 20px;
	background-color: black;

	& svg {
		width: 40px;
		height: 40px;
		color: orange;
	}

	@media (max-width: 500px) {
		& {
			padding: 15px;
		}
	}
`;

export default StyledHeader;
