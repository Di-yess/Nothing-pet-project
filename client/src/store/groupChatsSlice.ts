import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroupChatsSlice } from 'types/Interfaces';
import { getGroupChats } from './asyncThunk/getGroupChats';
import { postGroupMessage } from './asyncThunk/postGroupMessage';

const initialState: IGroupChatsSlice = {
  chats: [],
  status: null,
  error: null,
};

const groupChatsSlice = createSlice({
  name: 'groupChats',
  initialState,

  reducers: {
    addNewGroupChat: (state, action) => {
      // state.chats.push(...action.payload);
    },
  },

  // add group chats
  extraReducers: (builder) => {
    // get groupChats
    builder.addCase(getGroupChats.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.status = 'fulfilled';
    });

    builder.addCase(
      getGroupChats.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      }
    );

    // postGroupMessage
    builder.addCase(postGroupMessage.fulfilled, (state, action) => {
      if (action.payload) {
        const { chatId, data } = action.payload;

        state.chats
          .find(({ groupChat }) => groupChat.id === chatId)
          ?.groupChat.messages.push(data);
      }
    });
  },
});

export default groupChatsSlice.reducer;
export const { addNewGroupChat } = groupChatsSlice.actions;
