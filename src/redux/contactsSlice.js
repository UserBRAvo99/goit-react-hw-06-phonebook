import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contacts: [
    { id: 'id-1', userName: 'Rosie Simpson', userNumber: '459-12-56' },
    { id: 'id-2', userName: 'Hermione Kline', userNumber: '443-89-12' },
    { id: 'id-3', userName: 'Eden Clements', userNumber: '645-17-79' },
    { id: 'id-4', userName: 'Annie Copeland', userNumber: '227-91-26' },
  ],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    removeContacts(state, action) {
      const itemIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(itemIndex, 1);
    },
    setFilterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, setFilterContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
