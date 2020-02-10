const express = require('express');
const router = express.Router();


//@Route GET /api/auth
//@desc get logged in user
//@access private
router.get('/',(req,res)=>{
res.send('get logged in user');
});

//@Route Post /api/auth
//@desc log in user
//@access public
router.post('/',(req,res)=>{
res.send('log in user');
});

module.exports=router;