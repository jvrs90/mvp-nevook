const axios = require('axios');

async function getSearchBook(req, res) {
   const text = req.query.text;
   const response = await axios.get(`https://api.nevook.com/search/colection/books/${text}`);
   if (response) {
      res.json(response);
   } else {
      res.status(404);
   }
}

export default getSearchBook;