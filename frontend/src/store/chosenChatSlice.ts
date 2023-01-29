import { chosenChatType } from './../types/other';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: chosenChatType = {
  chosenChat: null,
};

const chosenChat = createSlice({
  name: 'chosenChat',
  initialState,
  reducers: {
    // showChat(state, action: PayloadAction<boolean>) {
    //   state.chat = action.payload;
    // },
  },
});

export default chosenChat.reducer;
export const {} = chosenChat.actions;
