const express = require('express');
require('dotenv').config;
const router = express.Router();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
  params: {
    category: 'inspirational',
  },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com',
  },
};
router.get('/getQuote', async (req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
