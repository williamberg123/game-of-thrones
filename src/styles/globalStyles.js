import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Kdam Thmor Pro', sans-serif;
	}

	.actually-page {
		border-bottom: 2px solid orange;
	}

	#root {
		background-color: black;
	}
`;

export default GlobalStyles;
