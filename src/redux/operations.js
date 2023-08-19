// https://64de0163825d19d9bfb1dcf3.mockapi.io/contacts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64de0163825d19d9bfb1dcf3.mockapi.io';

export const fetchContacts = createAsyncThunk('fetchContacts', async () => {
  try {
    const res = await axios.get('/contacts');
    console.log(res.data);
    return res.data;
  } catch (error) {}
});

export const removeContacts = createAsyncThunk('removeContacts', async id => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {}
});

export const addContacts = createAsyncThunk('addContacts', async user => {
  try {
    const res = await axios.post('/contacts');
    console.log(res.data);
    return res.data;
  } catch (error) {}
});
