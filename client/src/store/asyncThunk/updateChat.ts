import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IMessage } from 'types/Interfaces';

export const updateChat = createAsyncThunk(
  'chats/updateChat',
  async (chatId: number, {rejectWithValue}) => {
    try {
      const { data } = await axios<IMessage[]>({
        url: API + `/chats/chatmessages/${chatId}`,
        method: 'get',
        withCredentials: true,
      });
      return { chatId, data: data };
    } catch (err) {
      console.log(err);
    }
  }
);
