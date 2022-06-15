import styled from 'styled-components';

const StyledMainContainer = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 20px;

	& > h2 {
		color: red;
		margin: 20px 0;
	}

	@media (max-width: 600px) {
		& > h2 {
			margin-top: 0;
		}
	}
`;

export default StyledMainContainer;
