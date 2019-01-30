import React from 'react';
import ContactsList from './components/ContactsList/ContactsListContainer';
import AppHeader from './components/AppHeader/AppHeader';
import Modal from './components/Modal/ModalContainer';

const App = () => (
  <>
    <AppHeader />
    <ContactsList />
    <Modal />
  </>
);

export default App;
