import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IGetGroupChats } from '../../types/Interfaces';

export const getGroupChats = createAsyncThunk(
  'groupChats/getGroupChats',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios<IGetGroupChats[]>({
        url: API + '/chats/groupChats',
        method: 'get',
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
