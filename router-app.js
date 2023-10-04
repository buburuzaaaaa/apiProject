const express = require('express')
require('dotenv').config()
require('./db/connect')
const app = express()
const connectDB = require('./db/connect')
// const people =  require('./public/routes/people-controller')
const auth = require('./routes/auth')

//static assests
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json data

app.use(express.json())
//routes/router
app.use('/api', auth)
app.use(express.static('./public'))

// app.use('/api/people', people)

//server listen
// app.listen(6000, () =>{
    // console.log('listening on port 5000')
// })



const initServer = async () =>{
    try {
await connectDB(process.env.MONGO_URI)
        app.listen(7000, () =>{
            console.log('listening on port 7000')
        })
    } catch (error) {
        console.error(error)
    }
}

initServer()