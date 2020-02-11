const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

//@route get /api/contacts
//@desc get contacts
//@access private
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error' });
  }
};

//@route post /api/contacts
//@desc add contact
//@access private
exports.addContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, phone, type } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error' });
  }
};

//@route Put /api/contacts/:id
//@desc get contacts
//@access private
exports.updateContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  try {
    await Contact.updateOne(
      { _id: req.params.id },
      { $set: { name, email, phone, type } }
    );
    const contact = await Contact.findById({ _id: req.params.id });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error' });
  }
};

//@route delete /api/contacts/:id
//@desc delete contact
//@access private
exports.deleteContact = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Contact deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error' });
  }
};
