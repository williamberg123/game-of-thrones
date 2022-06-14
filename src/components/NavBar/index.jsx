import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppProvider/context';

import StyledNavBar from './styles';

export default function NavBar() {
	const { funcSetPage } = useContext(AppContext);

	return (
		<StyledNavBar>
			<ul>
				<li><Link className="actually-page" onClick={(e) => funcSetPage(e, 'home')} to="/game-of-thrones/">Home</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'characters')} to="/game-of-thrones/character">Personagens</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'continents')} to="/game-of-thrones/continent">Continentes</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'favs')} to="/game-of-thrones/favs">Favoritos</Link></li>
			</ul>
		</StyledNavBar>
	);
}