import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';

type Vars = {
  chatId: number;
  userId: number;
};

export const readMessages = createAsyncThunk(
  'chats/readMessages',
  async ({ chatId, userId }: Vars) => {
    try {
      await axios<string>({
        url: API + '/chats/message',
        method: 'put',
        data: { chatId },
        withCredentials: true,
      });
      return { chatId, userId };
    } catch (err) {
      console.log(err);
    }
  }
);
