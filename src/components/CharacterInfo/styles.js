import styled from 'styled-components';

const StyledCharacterInfo = styled.div`
	display: flex;
	flex-direction: column;

	& > h2 {
		color: red;
		text-transform: uppercase;
		font-size: 1rem;
		margin-top: 10px;
	}

	& > p {
		color: #555;
		margin-top: 10px;
	}

	& > label {
		margin-top: auto;
		color: white;
	}

	& > label > input[type="checkbox"] {
		margin-right: 10px;
	}
`;

export default StyledCharacterInfo;
