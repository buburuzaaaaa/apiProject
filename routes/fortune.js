const express = require('express');
require("dotenv").config
const router = express.Router()
const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
  }
};
router.get('/getCookie', async(req, res) =>{
   try {
	const response = await axios.request(options);
	res.json(response.data);
} catch (error) {
	console.error(error);
} 
})






module.exports = router