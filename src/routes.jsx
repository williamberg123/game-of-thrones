import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CgMenuLeftAlt } from 'react-icons/cg';

import Home from './templates/Home';
import CharacterPage from './templates/CharacterPage';
import FavPage from './templates/FavPage';
import NavBar from './components/NavBar';
import Header from './components/Header';
import RenderIf from './components/RenderIf';

import AppContext from './contexts/AppProvider/context';

export default function AppRoutes() {
	const { toggleMenuBar } = useContext(AppContext);
	const deviceWidth = document.body.clientWidth;

	return (
		<BrowserRouter>
			<Header>
				<NavBar />

				<RenderIf isTrue={ deviceWidth <= 600 }>
					<CgMenuLeftAlt onClick={ toggleMenuBar } />
				</RenderIf>
			</Header>
			<Routes>
				<Route path="/game-of-thrones/" element={ <Home /> } index />
				<Route path="/game-of-thrones/characters" element={ <CharacterPage /> } />
				<Route path="/game-of-thrones/favs" element={ <FavPage /> } />
			</Routes>
		</BrowserRouter>
	);
}
