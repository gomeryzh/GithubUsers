import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const filteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter(item => item.login.toLowerCase().includes(filter)),
);

// const items = getContacts(state);
// const filter = getFilter(state);

// return items.filter(item => item.name.toLowerCase().includes(filter));

export { getContacts, getFilter, filteredContacts };
