import { createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addContacts, removeContacts, setFilterContacts } from './actions';

export const initialState = {
  contacts: [
    { id: 'id-1', userName: 'Rosie Simpson', userNumber: '459-12-56' },
    { id: 'id-2', userName: 'Hermione Kline', userNumber: '443-89-12' },
    { id: 'id-3', userName: 'Eden Clements', userNumber: '645-17-79' },
    { id: 'id-4', userName: 'Annie Copeland', userNumber: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContacts.type: {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    }
    case removeContacts.type: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case setFilterContacts.type: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
