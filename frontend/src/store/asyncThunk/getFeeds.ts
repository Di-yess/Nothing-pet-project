import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFeeds = createAsyncThunk(
  'feeds/getFeeds',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/feeds');
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
