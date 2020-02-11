const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const { getContacts, addContact,updateContact,deleteContact } = require('../controllers/contacts');

//@route get /api/contacts
//@desc get contacts
//@access private
router.route('/').get(auth, getContacts);

//@route post /api/contacts
//@desc add contact
//@access private
//bracets for more than one middleware
router.route('/').post(
  [
    auth,
    [
      check('name', 'name is required')
        .not()
        .isEmpty()
    ]
  ],
  addContact
);

//@route Put /api/contacts/:id
//@desc get contacts
//@access private
router.route('/:id').put(auth,updateContact);

//@route delete /api/contacts/:id
//@desc delete contact
//@access private
router.route('/:id').delete(auth,deleteContact);

module.exports = router;
