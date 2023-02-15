import { userLoginThunk } from './asyncThunk/userLoginThunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from './asyncThunk/getUser';
import { infoUser, initState } from 'types/userInit';

const initialState: initState = {
  id: null,
  login: false,
  fullName: null,
  avatar: { link: null },
  phone: null,
  profession: null,
  email: null,
  adress: null,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    // logout
    clearInfo(state) {
      state.id = null;
      state.login = false;
      state.fullName = null;
      state.avatar = { link: null };
      state.phone = null;
      state.profession = null;
      state.email = null;
      state.adress = null;
      state.status = null;
      state.error = null;
    },
    // for inputs
    changeName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changePhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    changeProfession(state, action: PayloadAction<string>) {
      state.profession = action.payload;
    },
    changeAdress(state, action: PayloadAction<string>) {
      state.adress = action.payload;
    },
    changeAvatar(state, action: PayloadAction<string | null>) {
      state.avatar.link = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = 'loading';
    });

    // get User
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<infoUser>) => {
        const { id, fullName, avatar, phone, profession, email, adress } =
          action.payload;
        state.login = true;
        state.status = 'fulfilled';
        state.error = null;

        state.id = id;
        state.adress = adress;
        state.avatar = avatar;
        state.fullName = fullName;
        state.phone = phone;
        state.profession = profession;
        state.email = email;
      }
    );

    builder.addCase(
      getUser.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.error = action.payload;
        state.status = 'rejected';
      }
    );
    // user login/sign up
    builder.addCase(
      userLoginThunk.fulfilled,
      (state, action: PayloadAction<infoUser>) => {
        const { id, fullName, avatar, phone, profession, email, adress } =
          action.payload;
        state.login = true;
        state.status = 'fulfilled';
        state.error = null;

        state.id = id;
        state.adress = adress;
        state.avatar = avatar;
        state.fullName = fullName;
        state.phone = phone;
        state.profession = profession;
        state.email = email;
      }
    );

    builder.addCase(userLoginThunk.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(userLoginThunk.rejected, (state, action) => {
      if (action.payload) {
        state.status = 'rejected';
        state.error = action.payload.toString();
      }
    });
  },
});

export default userSlice.reducer;
export const {
  changeName,
  changeEmail,
  changePhone,
  changeProfession,
  changeAdress,
  changeAvatar,
  clearInfo,
} = userSlice.actions;
