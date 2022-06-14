import styled from 'styled-components';

const StyledHome = styled.div`
	width: 100%;
	min-height: 100vh;

	& > main {
		flex-direction: row;
		max-width: 1200px;
		align-items: center;
		justify-content: space-around;
	}

	& > main > img {
		max-width: 40%;
	}

	& section {
		width: 50%;
	}

	& section > h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	& section > p {
		font-size: 1rem;
		margin-bottom: 20px;
		color: #888;
		text-indent: 3rem;
	}

	@media (max-width: 800px) {
		& section > h1 {
			font-size: 1.3rem;
			margin-bottom: 10px;
		}

		& section > p {
			font-size: 0.7rem;
			margin-bottom: 10px;
		}
	}

	@media (max-width: 700px) {
		& > main > img {
			max-width: 50%;
		}
	}

	@media (max-width: 500px) {
		& main {
			flex-direction: column;
		}

		& > main > img {
			max-width: 300px;
		}

		& section {
			width: 100%;
		}

		& section > h1 {
			font-size: 1.5rem;
			margin-bottom: 20px;
		}

		& section > p {
			font-size: 0.9rem;
			text-indent: 2rem;
		}
	}
`;
export default StyledHome;
