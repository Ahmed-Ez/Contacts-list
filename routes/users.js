const express = require('express');
const router = express.Router();


//@route post api/users
//@desc Register user
//@access public
router.post('/',(req,res)=>{
    res.send('register user');
});

module.exports = router;