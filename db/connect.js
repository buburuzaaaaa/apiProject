const mongoose = require('mongoose')  
const connectDB = (url) =>{
    return mongoose.connect(url,{
//   const connectString = "mongodb+srv://<username>:<password>@cluster0.ac6gch6.mongodb.net/"
// mongoose.connect(connectString).
// then(()=>console.log('database connected successfully')).
// catch(err=>console.log(err));  
 })
}
//remeber this is temporary and needs to be replaced
module.exports = connectDB

