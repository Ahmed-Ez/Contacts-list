import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>No contacts Found :( ..</h4>;
  }
  return (
    <div>
      <Fragment>
        {filtered !== null
          ? filtered.map(contact => (
              <ContactItem contact={contact} key={contact.id} />
            ))
          : contacts.map(contact => (
              <ContactItem contact={contact} key={contact.id} />
            ))}
      </Fragment>
    </div>
  );
};

export default Contacts;
