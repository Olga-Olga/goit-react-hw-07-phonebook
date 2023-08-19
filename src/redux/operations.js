// https://64de0163825d19d9bfb1dcf3.mockapi.io/contacts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64de0163825d19d9bfb1dcf3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      // dispatch(loading(true));
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkAPI) => {
    console.log(thunkAPI);
    try {
      const res = await axios.delete(`/contacts/${id}`);
      console.log('removeContacts', res.data);
      return res.data.id;
      // return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().loading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', user);
      console.log('addContacts', res.data);
      // toast.success(`Contact ${res.data.name} has been added!`)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
