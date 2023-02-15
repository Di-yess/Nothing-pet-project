import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAllUsers, IUser } from 'types/Interfaces';
import { API } from '../../constants';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<IUser>({
        url: API + '/user',
        method: 'get',
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      console.log(err);
      if (err.message === 'Network Error') {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getUsers = createAsyncThunk(
  'allUsers/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<IAllUsers[]>({
        url: API + '/user/all',
        method: 'get',
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.error);
    }
  }
);
