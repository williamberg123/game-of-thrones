import styled from 'styled-components';

const StyledCharactersList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (max-width: 500px) {
		grid-gap: 10px;
	}
`;

export default StyledCharactersList;
