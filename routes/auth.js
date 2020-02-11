const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const { loginUser, getLoggedUser } = require('../controllers/auth');

//@Route Post /api/auth
//@desc log in user
//@access public
router
  .route('/')
  .post(
    [
      check('email', 'Please enter a valid email').isEmail(),
      check('password', 'password is required').exists()
    ],
    loginUser
  );

//@Route GET /api/auth
//@desc get logged in user
//@access private
router.route('/').get(auth, getLoggedUser);

module.exports = router;
