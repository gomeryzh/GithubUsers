import React from 'react';
import Contact from '../Contact/Contact';

import * as s from './ContactsList.module.css';

const ContactsList = ({ contacts = [], deleteContact }) => (
  <div className={s.container}>
    {contacts.map((contact, index) => {
      return (
        <Contact
          key={`contact-${index}`}
          index={index}
          contact={contact}
          {...contact}
          onDelete={() => deleteContact(contact.id)}
        />
      );
    })}
  </div>
);

export default ContactsList;
