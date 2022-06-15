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
		color: #999;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	& > label svg {
		margin-right: 5px;
		width: 25px;
		height: 25px;
		fill: white;
	}

	& .svg-fav {
		fill: #11A80C;
	}

	& > label > input[type="checkbox"] {
		margin-right: 10px;
		display: none;
	}

	@media (max-width: 800px) {
		& > h2 {
			font-size: 0.8rem;
		}

		& > p {
			font-size: 0.8rem;
			margin-top: 5px;
		}

		& > label {
			font-size: 0.8rem;
		}
	}
`;

export default StyledCharacterInfo;
