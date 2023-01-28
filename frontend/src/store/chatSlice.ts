import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  chat: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    showChat(state, action: PayloadAction<boolean>) {
      state.chat = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const { showChat } = chatSlice.actions;
