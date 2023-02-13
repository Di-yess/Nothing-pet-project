import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
export const findOrCreateChat = createAsyncThunk(
  'chats/findOrCreateChat',
  async (personId: number | null) => {
    try {
      const { data } = await axios({
        url: API + '/chats/newChat',
        method: 'post',
        data: { personId },
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
