import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChats = createAsyncThunk(
  'chats/getChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/chats');
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
