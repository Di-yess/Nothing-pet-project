import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
