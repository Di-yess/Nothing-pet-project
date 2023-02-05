import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logout = createAsyncThunk(
  'chats/getChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/logout');
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
