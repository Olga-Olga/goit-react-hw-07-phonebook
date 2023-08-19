import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, removeContacts } from './operations';

const contactSlice = createSlice({
  name: 'phone',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  // reducers: {
  //   addContact: (state, { payload }) => {
  //     state.contacts.push(payload);
  //   },
  //   removeContact: (state, { payload }) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== payload
  //     );
  //   },
  //   filterChanges: (state, { payload }) => {
  //     state.filter = payload;
  //     console.log(state.filter);
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.items = action.payload;
    });
    builder.addCase(removeContacts.fulfilled, (state, { payload }) => {
      state.contacts.items.filter(contact => contact.id !== payload);
    });
    builder.addCase(addContacts.fulfilled, (state, { payload }) => {
      state.contacts.items.push(payload);
    });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, filterContacts, filterChanges, removeContact } =
  contactSlice.actions;
