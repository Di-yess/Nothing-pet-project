import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setInfo } from '../userSlice';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get('/user');
      dispatch(setInfo(response.data));
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
