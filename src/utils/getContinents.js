import axios from 'axios';

const getContinents = async (url) => {
	const data = await axios.get(url);
	return data;
};

export default getContinents;
