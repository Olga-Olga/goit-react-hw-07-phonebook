import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'phone',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterChanges: (state, { payload }) => {
      state.filter = payload;
      console.log(state.filter);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, filterContacts, filterChanges, removeContact } =
  contactSlice.actions;
