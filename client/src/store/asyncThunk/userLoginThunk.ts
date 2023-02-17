import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IUser } from './../../../../server/src/types.d';
import { loginProps } from './../../types/loginTypes';

export const userLoginThunk = createAsyncThunk(
  'user/login',
  async (userData: loginProps, { rejectWithValue }) => {
    const { fullName, email, password, check, navigate} = userData;

    if (!check) {
      try {
        //fetch на логин
        const { data } = await axios<IUser>({
          url: API + '/login',
          method: 'post',
          data: { email, password },
          withCredentials: true,
        });
        navigate('/');
        return data;
      } catch (err: any) {
        return rejectWithValue(err.response.data.error);
      }
    } else {
      //fetch на регистрацию
      try {
        const { data } = await axios<IUser>({
          url: API + '/register',
          method: 'post',
          data: { fullName, email, password },
          withCredentials: true,
        });
        // setData({ navigate, dispatch, data });
        navigate('/');
        return data;
      } catch (err: any) {
        return rejectWithValue(err.response.data.error);
      }
    }
  }
);
