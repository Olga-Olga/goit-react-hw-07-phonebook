import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64de0163825d19d9bfb1dcf3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
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

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkAPI) => {
    // console.log(thunkAPI);
    try {
      const res = await axios.delete(`/contacts/${id}`);
      toast.success(`Contact ${res.data.name} has been deleted!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      return res.data.id;
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
      console.log(user);
      const res = await axios.post('/contacts', {
        name: user.name,
        phone: user.number,
      });
      toast.success(`Contact ${res.data.name} has been added!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
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
