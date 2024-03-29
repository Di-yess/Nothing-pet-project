import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allUserSlice from './allUsersSlice';
import chatSlice from './chatSlice';
import chatsSlice from './chatsSlice';
import feedSlice from './feedSlice';
import groupChatSlice from './groupChatSlice';
import groupChatsSlice from './groupChatsSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  feeds: feedSlice,
  allUsers: allUserSlice,
  chat: chatSlice,
  chats: chatsSlice,
  groupChat: groupChatSlice,
  groupChats: groupChatsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
