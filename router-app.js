const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
// const people =  require('./public/routes/people-controller')
const fortune = require('./routes/fortune');
const quotes = require('./routes/quotes');

//static assests
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json data
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
//routes/router
app.use('/api/fortune', fortune);
app.use('/api/quotes', quotes);

// app.use('/api/people', people)

//server listen
// app.listen(6000, () =>{
// console.log('listening on port 5000')
// })

app.listen(7000, () => {
  console.log('listening on port 7000');
});
