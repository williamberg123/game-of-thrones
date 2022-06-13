import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './templates/Home';
import CharacterPage from './templates/CharacterPage';
import ContinentPage from './templates/ContinentPage';
import FavPage from './templates/FavPage';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/game-of-thrones/" element={ <Home /> } index />
				<Route path="/game-of-thrones/character" element={ <CharacterPage /> } />
				<Route path="/game-of-thrones/continent" element={ <ContinentPage /> } />
				<Route path="/game-of-thrones/favs" element={ <FavPage /> } />
			</Routes>
		</BrowserRouter>
	);
}
