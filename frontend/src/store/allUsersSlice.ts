import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allUsers } from '../types/userInit';
import { getUsers } from './asyncThunk/getUser';

const initialState: allUsers = {
  allUsers: [],
  status: null,
  error: null,
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getUsers.fulfilled,
      // разобраться
      (state, action) => {
        state.allUsers.push(...action.payload);
        state.status = 'fulfilled';
      }
    );
    builder.addCase(
      getUsers.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.error = action.payload;
        state.status = 'rejected';
      }
    );
  },
});

export default allUsersSlice.reducer;
//export const { addUsers } = allUsersSlice.actions;
