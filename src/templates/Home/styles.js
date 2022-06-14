import styled from 'styled-components';

const StyledHome = styled.div`
	width: 100%;

	& > main {
		flex-direction: row;
		max-width: 1200px;
		align-items: center;
		justify-content: space-around;
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
		font-size: 1.2rem;
		margin-bottom: 20px;
		color: #888;
		text-indent: 3rem;
	}
`;
export default StyledHome;
