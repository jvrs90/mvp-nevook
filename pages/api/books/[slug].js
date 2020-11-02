const axios = require('axios');

async function getBookBySlug(req, res) {
	const slug = req.query.slug;
	const response = await axios.get(`https://api.nevook.com/books/${slug}`);
	if (response) {
		res.json(response);
	} else {
		res.json({});
	}
}

export default getBookBySlug;