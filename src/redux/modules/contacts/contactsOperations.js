import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addContactSuccess,
  deleteContactSuccess,
} from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const resp = await axios.get(
      'https://api.github.com/search/users?q=location:uzhgorod+followers:A>5',
    );
    dispatch(fetchSuccess(resp.data.items));
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
