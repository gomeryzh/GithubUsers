import {
  ADD_SUCCESS,
  DELETE_SUCCESS,
  CHANGE_FILTER,
  CHANGE_CONTACT_POSITION,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_NEW_ORDER,
} from './contactsActionsTypes';

const filterContact = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const addContactSuccess = contact => ({
  type: ADD_SUCCESS,
  payload: contact,
});

const deleteContactSuccess = id => ({
  type: DELETE_SUCCESS,
  payload: id,
});

const changeContactPosition = ({ oldIndex, newIndex }) => ({
  type: CHANGE_CONTACT_POSITION,
  payload: { oldIndex, newIndex },
});

const setNewOrder = (oldIndex, newIndex) => ({
  type: SET_NEW_ORDER,
  payload: oldIndex,
  newIndex,
});

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: FETCH_SUCCESS,
  payload: notes,
});

const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error,
});

export {
  addContactSuccess,
  deleteContactSuccess,
  changeContactPosition,
  filterContact,
  fetchRequest,
  fetchSuccess,
  fetchError,
  setNewOrder,
};
