import { chatsType, chatType } from '../types/chatsType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getChats } from './asyncThunk/getChats';

const initialState: chatsType = {
  chats: [],
  status: null,
  error: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getChats.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getChats.fulfilled,
      (state, action: PayloadAction<chatType[]>) => {
        state.chats.push(...action.payload);
        state.status = 'fulfilled';
      }
    );
    builder.addCase(
      getChats.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.status = 'rejected';
        state.error = action.payload;
      }
    );
  },
});

export default chatsSlice.reducer;
export const {} = chatsSlice.actions;
