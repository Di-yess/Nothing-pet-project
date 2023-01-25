import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from './asyncThunk/getUser';
import { infoUser, initState } from '../types/userInit';

const initialState: initState = {
  id: null,
  login: false,
  fullName: null,
  img: null,
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
    userStatus(state, action: PayloadAction<boolean>) {
      state.login = action.payload;
      state.status = 'fulfilled';
    },
    // setInfo
    setInfo(state, action: PayloadAction<infoUser>) {
      const { id, fullName, img, phone, profession, email, adress } =
        action.payload;
      //state = { ...state, ...action.payload };
      state.id = id;
      state.adress = adress;
      state.img = img;
      state.fullName = fullName;
      state.phone = phone;
      state.profession = profession;
      state.email = email;
    },
    // logout
    clearInfo(state) {
      state.login = false;
      state.fullName = null;
      state.img = null;
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
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getUser.fulfilled, (state) => {
      state.login = true;
      state.status = 'fulfilled';
    });
    builder.addCase(
      getUser.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.error = action.payload;
        state.status = 'rejected';
      }
    );
  },
});

export default userSlice.reducer;
export const {
  userStatus,
  setInfo,
  changeName,
  changeEmail,
  changePhone,
  changeProfession,
  changeAdress,
  clearInfo,
} = userSlice.actions;
