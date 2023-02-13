import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IFeed } from 'types/Interfaces';

export const getFeeds = createAsyncThunk(
  'feeds/getFeeds',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<IFeed[]>({
        url: API + '/feeds',
        method: 'get',
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
