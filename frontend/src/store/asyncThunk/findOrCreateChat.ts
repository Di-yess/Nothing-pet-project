import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const findOrCreateChat = createAsyncThunk(
  'chats/findOrCreateChat',
  async (personId: number | null, {}) => {
    try {
      const { data } = await axios.post('/chats/newChat', {
        personId,
      });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
