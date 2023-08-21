import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  reducers: {
    // addContact: (state, { payload }) => {
    //   state.contacts.push(payload);
    // },
    // removeContact: (state, { payload }) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== payload
    //   );
    // },
    filterChanges: (state, { payload }) => {
      state.filter = payload;
      console.log(state.filter);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(removeContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          removeContacts.fulfilled,
          addContacts.fulfilled
        ),
        (state, action) => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          removeContacts.pending,
          addContacts.pending
        ),
        (state, action) => {
          state.contacts.isLoading = true;
        }
      );
  },
});

export const contactReducer = contactSlice.reducer;
export const { filterChanges } = contactSlice.actions;
