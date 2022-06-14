import axios from 'axios';

const getCharacters = async (url) => {
	const data = await axios.get(url);
	return data;
};

export default getCharacters;
