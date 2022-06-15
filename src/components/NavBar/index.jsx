import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppProvider/context';

import StyledNavBar from './styles';

export default function NavBar() {
	const { funcSetPage, tagUlRef } = useContext(AppContext);
	const deviceWidth = document.body.clientWidth;

	useEffect(() => {
		const outSideClick = (e) => {
			if (e.target !== tagUlRef.current && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
				tagUlRef.current.style.display = 'none';
			}
		};

		if (deviceWidth < 600) {
			document.addEventListener('click', outSideClick);
		} else {
			document.removeEventListener('click', outSideClick);
		}

		return () => {
			document.removeEventListener('click', outSideClick);
		};
	}, [deviceWidth]);

	return (
		<StyledNavBar>
			<ul ref={tagUlRef}>
				<li><Link className="actually-page" onClick={(e) => funcSetPage(e, 'home')} to="/game-of-thrones/">Home</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'characters')} to="/game-of-thrones/characters/">Personagens</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'continents')} to="/game-of-thrones/continents/">Continentes</Link></li>
				<li><Link onClick={(e) => funcSetPage(e, 'favs')} to="/game-of-thrones/favs/">Favoritos</Link></li>
			</ul>
		</StyledNavBar>
	);
}
