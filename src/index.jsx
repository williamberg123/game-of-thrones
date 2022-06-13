import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>,
);
