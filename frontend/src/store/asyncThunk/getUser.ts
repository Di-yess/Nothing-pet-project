import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setInfo } from '../userSlice';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get('/user');
      console.log(response.data);
      dispatch(setInfo(response.data));
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  'allUsers/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user/all');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
