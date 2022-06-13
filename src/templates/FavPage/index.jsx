import FavsProvider from '../../contexts/FavsProvider';
import StyledFavPage from './styles';

export default function FavPage() {
	return (
		<StyledFavPage>
			<FavsProvider>
				<h1>Fav page</h1>
			</FavsProvider>
		</StyledFavPage>
	);
}
