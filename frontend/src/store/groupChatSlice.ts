import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroupChat, IGroupChatUser } from '../types/Interfaces';
import { createGroupChat } from './asyncThunk/createGroupChat';

const initialState: IGroupChat = {
  users: [],
  status: null,
  error: null,
};

const groupChatSlice = createSlice({
  name: 'groupChat',
  initialState,

  reducers: {
    addGroupUsers: (state, action: PayloadAction<IGroupChatUser[]>) => {
      state.users.push(...action.payload);
    },
    chooseGroupUser: (state, action: PayloadAction<number>) => {
      const chosenUser = state.users.find((user) => user.id === action.payload);
      if (chosenUser) {
        chosenUser.chosen = !chosenUser.chosen;
      }
    },
  },

  // create group chat
  extraReducers: (builder) => {
    builder.addCase(createGroupChat.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(createGroupChat.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = 'success';
      state.users = [];
    });

    builder.addCase(createGroupChat.rejected, (state, action: any) => {
      state.status = 'error';
      state.error = action.payload;
    });
  },
});

export default groupChatSlice.reducer;
export const { addGroupUsers, chooseGroupUser } = groupChatSlice.actions;
