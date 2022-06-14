import styled from 'styled-components';

const StyledMainContainer = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 20px;

	& > img {
		max-width: 500px;
	}
`;

export default StyledMainContainer;
