import { createReducer, createStore } from '@reduxjs/toolkit';
import shortid from 'shortid';

// initialState = початковий стейт
export const initialState = {
  phonebook: {
    contacts: [],
    filter: '',
  },
};

// contactsReducer
export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: shortid(),
            userName: 'Roman B.',
            userNumber: 7777777,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

// store = тримає в собі всі данні які будуть в додатку. сховище/стейт

export const store = createReducer(
  contactsReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const store = createStore(
//     rootRe
//   contactsReducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// actions
export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = text => ({ type: ADD_CONTACT, payload: text });
