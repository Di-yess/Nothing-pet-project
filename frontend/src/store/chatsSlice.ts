import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  chatsType,
  chatType,
  newMessage,
  newMessages,
} from '../types/chatsType';
import { createChat } from './asyncThunk/createChat';
import { getChats } from './asyncThunk/getChats';
import { postMessage } from './asyncThunk/postMessage';
import { readMessages } from './asyncThunk/readMessages';
import { updateChat } from './asyncThunk/updateChat';

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
        state.chats = action.payload;
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
    builder.addCase(
      createChat.rejected,
      (state, action: PayloadAction<string | any>) => {
        console.log(action.payload);
      }
    );

    //update messages
    builder.addCase(readMessages.fulfilled, (state, action: any) => {
      const { chatId, userId } = action.payload;
      state.chats
        .find((chat) => chat.id === chatId)
        ?.messages.forEach(({ message }) => {
          if (message.id !== userId) {
            message.read = true;
          }
        });
    });
  },
});

export default chatsSlice.reducer;
export const {} = chatsSlice.actions;
