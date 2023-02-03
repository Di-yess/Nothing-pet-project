import { updateChat } from './asyncThunk/updateChat';
import {
  chatsType,
  chatType,
  Message,
  newMessage,
  newMessages,
} from '../types/chatsType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getChats } from './asyncThunk/getChats';
import { postMessage } from './asyncThunk/postMessage';
import { createChat } from './asyncThunk/createChat';

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

    // get chats
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
    builder.addCase(
      postMessage.fulfilled,
      (state, action: PayloadAction<newMessage | undefined>) => {
        console.log(action.payload);

        if (action.payload) {
          const { chatId, data } = action.payload;
          state.chats.find((chat) => chat.id === chatId)?.messages.push(data);
        }
      }
    );

    // update chat
    builder.addCase(
      updateChat.fulfilled,
      (state, action: PayloadAction<newMessages | undefined>) => {
        if (action.payload) {
          const { chatId, data } = action.payload;
          const chat = state.chats.find((chat) => chat.id === chatId);
          if (chat) {
            chat.messages = data;
          }
        }
      }
    );

    // create chat
    builder.addCase(
      createChat.fulfilled,
      (state, action: PayloadAction<chatType>) => {
        state.chats.push(action.payload);
      }
    );
    builder.addCase(createChat.rejected, (state, action:PayloadAction<string | any>) => {
      console.log(action.payload);
    });
  },
});

export default chatsSlice.reducer;
export const {} = chatsSlice.actions;
