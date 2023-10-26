const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
  headers: {
    'X-RapidAPI-Key': '5b0189f327msh227820ed37b7763p1163a8jsndb160fe38a64',
    'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}