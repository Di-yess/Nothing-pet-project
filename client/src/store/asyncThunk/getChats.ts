import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IChat } from 'types/Interfaces';

export const getChats = createAsyncThunk(
  'chats/getChats',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<IChat[]>({
        url: API + '/chats',
        method: 'get',
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
