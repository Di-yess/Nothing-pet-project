import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { feedInit, feedType } from '../types/feedType';
import { getFeeds } from './asyncThunk/getFeeds';

const initialState: feedInit = {
  feeds: [],
  status: null,
  error: null,
};

const feedSlice = createSlice({
  name: 'feeds',
  initialState,

  reducers: {
    putFeeds(state, action: PayloadAction<feedType[]>) {
      if (state.feeds.length === 9) {
        state.feeds.pop();
      }
      state.feeds.unshift(...action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFeeds.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getFeeds.fulfilled,
      (state, action: PayloadAction<feedType[]>) => {
        state.feeds.push(...action.payload);
        state.status = 'fulfilled';
      }
    );
    builder.addCase(
      getFeeds.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.error = action.payload;
        state.status = 'rejected';
      }
    );
  },
});

export default feedSlice.reducer;
export const { putFeeds } = feedSlice.actions;
