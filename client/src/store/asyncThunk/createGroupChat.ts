import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { IGroupChatInfo, IGroupChatUser } from 'types/Interfaces';
import { getGroupChats } from './getGroupChats';

type Props = {
  newChatUsers: IGroupChatUser[];
  chatName: string;
};

export const createGroupChat = createAsyncThunk(
  'groupChat/createChat',
  async ({ newChatUsers, chatName }: Props, { dispatch, rejectWithValue }) => {
    try {
      // наверное, не <IChat>
      await axios<IGroupChatInfo>({
        url: API + '/chats/newGroupChat',
        method: 'post',
        data: { newChatUsers, chatName },
        withCredentials: true,
      });
      
      dispatch(getGroupChats());

      return true;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
