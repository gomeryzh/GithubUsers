import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { arrayMove } from 'react-sortable-hoc';
import { SortableContainer } from 'react-sortable-hoc';
import * as s from './ContactsList.module.css';

class ContactsList extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const newOrderedList = arrayMove(this.props.contacts, oldIndex, newIndex);
    this.props.setNewOrder(newOrderedList);
  }

  render() {
    const { contacts = [], editContactStart, deleteContact } = this.props;
    const SortableTableBody = SortableContainer(({ contacts = [] }) => {
      return (
        <div className={s.container}>
          {contacts.map((contact, index) => {
            return (
              <Contact
                key={`contact-${index}`}
                index={index}
                contact={contact}
                {...contact}
                onDelete={() => deleteContact(contact.id)}
                onEdit={() => editContactStart(contact.id)}
              />
            );
          })}
        </div>
      );
    });

    return (
      <div>
        <SortableTableBody
          pressDelay="200"
          pressThreshold="10"
          contacts={contacts}
          onSortEnd={this.onSortEnd.bind(this)}
        />
      </div>
    );
  }
}

export default ContactsList;
