import { useContext } from 'react';

import AppContext from '../../contexts/AppProvider/context';
import Continent from '../Continent';
import StyledContinentsList from './styles';

export default function ContinentsList() {
	const { continents } = useContext(AppContext);

	const continentsList = continents.map(
		(continent) => <Continent key={continent.id} {...continent} />,
	);

	return (
		<StyledContinentsList>
			{continentsList}
		</StyledContinentsList>
	);
}
