import { createReducer, nanoid } from '@reduxjs/toolkit';
import { addContacts, deleteContacts } from './actions';

export const phoneBookReducer = createReducer(
  {
    contacts: [],
    filter: '',
  },
  {
    [addContacts]: (state, action) => {
      state.contacts.push({
        id: nanoid(),
        name: action.payload,
        number: action.payload,
      });
    },
    [deleteContacts]: (state, action) => {},
  }
);
