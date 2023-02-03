import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Vars = {
  chatId: number;
  userId: number;
};

export const readMessages = createAsyncThunk(
  'chats/readMessages',
  async ({ chatId, userId }: Vars) => {
    try {
      await axios.put('/chats/message', { chatId });
      return { chatId, userId };
    } catch (err) {
      console.log(err);
    }
  }
);
