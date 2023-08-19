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
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.loading = false;
      })
      .addCase(removeContacts.fulfilled, (state, { payload }) => {
        state.contacts.items.filter(contact => contact.id !== payload);
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, filterContacts, filterChanges, removeContact } =
  contactSlice.actions;
