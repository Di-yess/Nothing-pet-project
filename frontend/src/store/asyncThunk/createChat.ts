import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createChat = createAsyncThunk(
  'chats/createChat',
  async ({ newPersonId }: { newPersonId: number }, { rejectWithValue }) => {
    try {
      console.log('async thunk', newPersonId);
      const { data } = await axios.post('/chats', { newPersonId });
      console.log(data);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// санке нужен ДИСПАТЧ
