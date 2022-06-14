import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './templates/Home';
import CharacterPage from './templates/CharacterPage';
import ContinentPage from './templates/ContinentPage';
import FavPage from './templates/FavPage';
import NavBar from './components/NavBar';
import Header from './components/Header';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Header>
				<NavBar />
			</Header>
			<Routes>
				<Route path="/game-of-thrones/" element={ <Home /> } index />
				<Route path="/game-of-thrones/characters" element={ <CharacterPage /> } />
				<Route path="/game-of-thrones/continents" element={ <ContinentPage /> } />
				<Route path="/game-of-thrones/favs" element={ <FavPage /> } />
			</Routes>
		</BrowserRouter>
	);
}
