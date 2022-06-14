import { useContext } from 'react';

import AppContext from '../../contexts/AppProvider/context';
import RenderIf from '../../components/RenderIf';
import CharactersList from '../../components/CharactersList';

import StyledCharacterPage from './styles';
import MainContainer from '../../containers/MainContainer';

export default function CharacterPage() {
	const { characters } = useContext(AppContext);

	return (
		<StyledCharacterPage>
			<h1>Character page</h1>
			<MainContainer>
				<RenderIf isTrue={!!characters.length}>
					<CharactersList />
				</RenderIf>
			</MainContainer>
		</StyledCharacterPage>
	);
}
