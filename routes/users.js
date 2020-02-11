const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { registerUser } = require('../controllers/users');

//@route post api/users
//@desc Register user
//@access public
router.route('/').post(
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be atleast 6 characters').isLength({
      min: 6
    })
  ],
  registerUser
);

module.exports = router;
