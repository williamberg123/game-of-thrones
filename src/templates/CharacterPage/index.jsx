import { useContext } from 'react';
import Loader from 'react-js-loader';

import AppContext from '../../contexts/AppProvider/context';
import RenderIf from '../../components/RenderIf';
import CharactersList from '../../components/CharactersList';

import StyledCharacterPage from './styles';
import MainContainer from '../../containers/MainContainer';

export default function CharacterPage() {
	const { characters } = useContext(AppContext);

	return (
		<StyledCharacterPage>
			<MainContainer>
				<h2>PERSONAGENS</h2>
				<RenderIf isTrue={ !characters.length }>
					<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
				</RenderIf>

				<RenderIf isTrue={!!characters.length}>
					<CharactersList characters={characters} />
				</RenderIf>
			</MainContainer>
		</StyledCharacterPage>
	);
}
