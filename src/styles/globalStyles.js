import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Kdam Thmor Pro', sans-serif;
	}

	.actually-page {
		border-bottom: 2px solid orange;
	}

	.App {
		background-color: black;
	}
`;

export default GlobalStyles;
