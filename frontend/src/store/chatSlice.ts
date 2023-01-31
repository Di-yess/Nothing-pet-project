import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatChecker } from '../types/chatsType';

const initialState: chatChecker = {
  chat: false,
  chosenChat: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    showChat(state, action: PayloadAction<boolean>) {
      state.chat = action.payload;
    },
    chooseChat(state, action: PayloadAction<number>) {
      state.chosenChat = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const { showChat, chooseChat } = chatSlice.actions;
