const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
    },
    userName: {
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    userPassword:{
        type: String,
        required: true,
    }
},{collection: 'users'}); 
module.exports = mongoose.model('User', userSchema);