import { createAction } from '@reduxjs/toolkit';

// export const ADD_CONTACTS = 'ADD_CONTACTS';

// export const addContacts = text => ({ type: ADD_CONTACTS, payload: text });

export const addContacts = createAction('ADD_CONTACTS');
export const removeContacts = createAction('REMOVE_CONTACTS');
export const setFilterContacts = createAction('FILTER_CONTACTS');
