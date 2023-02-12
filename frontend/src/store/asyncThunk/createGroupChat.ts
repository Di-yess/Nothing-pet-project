import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IChat, IGroupChatUser } from '../../types/Interfaces';

export const createGroupChat = createAsyncThunk(
  'groupChat/createChat',
  async (newChatUsers: IGroupChatUser[], { dispatch, rejectWithValue }) => {
    try {
      // наверное, не <IChat>
      // плюс добавить имя чата
      const { data } = await axios<IChat>({
        url: API + '/chats/newGroupChat',
        method: 'post',
        data: { newChatUsers },
        withCredentials: true,
      });
      console.log(data);
      // dispatch() добавить новый чат в slice с чатами
      // Либо нет? Подумать, куда пихать групповые чаты
      return newChatUsers;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
