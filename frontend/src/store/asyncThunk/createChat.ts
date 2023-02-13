import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IChat } from 'types/Interfaces';

export const createChat = createAsyncThunk(
  'chats/createChat',
  async ({ newPersonId }: { newPersonId: number }, { rejectWithValue }) => {
    try {
      const { data } = await axios<IChat>({
        url: API + '/chats',
        method: 'POST',
        data: { newPersonId },
        withCredentials: true,
      });
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// санке нужен ДИСПАТЧ
