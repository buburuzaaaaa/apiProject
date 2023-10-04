const express = require('express');
const router = express.Router();

router.post('/', (req, res,next) => {
    const{userEmail,userPassword} = req.body;
    if(userEmail == "2"){
        next();
    }
})

module.exports = router;