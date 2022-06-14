import styled from 'styled-components';

const StyledNavBar = styled.nav`
	& > ul {
		max-width: 700px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		list-style: none;
	}

	& > ul a {
		padding: 10px 20px;
		text-decoration: none;
		text-transform: uppercase;
		color: orange;
		font-weight: bold;
		font-size: 0.8rem;
	}

	& > ul a:hover {
		background-color: orange;
		color: black;
		transition: 0.3s;
		border-radius: 3px;
	}
`;
export default StyledNavBar;
