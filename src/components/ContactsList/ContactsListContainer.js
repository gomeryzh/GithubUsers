import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import { setNewOrder } from '../../redux/modules/contacts/contactsActions';
import { filteredContacts } from '../../redux/modules/contacts/contactsSelector';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  editContactStart,
} from '../../redux/modules/contacts/contactsOperations';

class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchContacts();
    console.log(this.props);
  };

  render() {
    return <ContactsList {...this.props} />;
  }
}

const mapState = state => ({
  contacts: filteredContacts(state),
});

const mapDispatch = {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  editContactStart,
  setNewOrder,
};

export default connect(
  mapState,
  mapDispatch,
)(ContactsListContainer);
