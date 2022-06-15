import { useContext } from 'react';
import MainContainer from '../../containers/MainContainer';
import ContinentList from '../../components/ContinentsList';
import RenderIf from '../../components/RenderIf';
import StyledContinentPage from './styles';
import AppContext from '../../contexts/AppProvider/context';

export default function ContinentPage() {
	const { continents } = useContext(AppContext);

	return (
		<StyledContinentPage>
			<MainContainer>
				<h2>CONTINENTES</h2>
				<RenderIf isTrue={ !!continents.length }>
					<ContinentList />
				</RenderIf>
			</MainContainer>
		</StyledContinentPage>
	);
}
