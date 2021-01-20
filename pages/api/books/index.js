const axios = require('axios');

async function getAllBooks(req, res) {
	const response = await axios.get('https://api.nevook.com/books?p=1&l=200');
	if (response) {
		res.json(response.data);
	} else {
		res.json({});
	}
}

export default getAllBooks;