import axios from 'axios';

const getCharacters = async (url) => {
	const chractersData = await axios.get(url);
	const characters = chractersData.data.map((character) => ({ ...character, isFav: false }));
	return characters;
};

export default getCharacters;
