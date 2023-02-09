import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IAllUsers, IUser } from '../../types/Interfaces';
import { setInfo } from '../userSlice';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios<IUser>({
        url: API + '/user',
        method: 'get',
        withCredentials: true,
      });
      dispatch(setInfo(data));
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
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
      return rejectWithValue(err.message);
    }
  }
);
