import { combineReducers, configureStore } from '@reduxjs/toolkit';
import feedSlice from './feedSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  feeds: feedSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
