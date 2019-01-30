import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addContactSuccess,
  deleteContactSuccess,
  editContactStartSuccess,
  editContactSuccess,
} from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.get('http://localhost:3099/contacts');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addContact = ({ name, email, phone }) => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.post('http://localhost:3099/contacts', {
      name,
      phone,
      email,
    });
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    await axios.delete(`http://localhost:3099/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const editContactStart = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    axios.get(`http://localhost:3099/contacts/${id}`);
    dispatch(editContactStartSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const editContact = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    axios.patch(`http://localhost:3099/contacts/${id}`);
    dispatch(editContactSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
