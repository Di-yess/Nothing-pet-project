import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';

export const logout = createAsyncThunk(
  'chats/getChats',
  async (_, { rejectWithValue }) => {
    try {
      await axios<string>({
        url: API + '/logout',
        method: 'get',
        withCredentials: true,
      });
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
