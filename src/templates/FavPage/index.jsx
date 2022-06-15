import { useContext } from 'react';

import MainContainer from '../../containers/MainContainer';
import FavsList from '../../components/FavsList';
import RenderIf from '../../components/RenderIf';

import FavsProvider from '../../contexts/FavsProvider';
import AppContext from '../../contexts/AppProvider/context';
import StyledFavPage from './styles';

export default function FavPage() {
	const { characters } = useContext(AppContext);

	return (
		<StyledFavPage>
			<FavsProvider>
				<MainContainer>
					<h2>FAVORITOS</h2>
					<RenderIf isTrue={ !!characters.length }>
						<FavsList characters={characters} />
					</RenderIf>
				</MainContainer>
			</FavsProvider>
		</StyledFavPage>
	);
}
