import MainContainer from '../../containers/MainContainer';
import Image from '../../components/Image';

import sourceGOTImage from '../../images/game-of-thrones.jpg';
import StyledHome from './styles';

export default function Home() {
	return (
		<StyledHome>
			<MainContainer>
				<Image src={sourceGOTImage} />
			</MainContainer>
		</StyledHome>
	);
}
